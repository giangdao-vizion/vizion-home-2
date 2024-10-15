const { gql } = require('apollo-server');
const { GraphQLJSON } = require('graphql-type-json');
const { getDb } = require('./db');
const fs = require('fs');

const COLLECTIONS_FILE = 'collections_structure.json';

async function generateDynamicSchema() {
  let collectionsStructure;

  // Đọc cấu trúc collection từ file hoặc từ cơ sở dữ liệu
  if (fs.existsSync(COLLECTIONS_FILE)) {
    console.log('Reading collections structure from file...');
    collectionsStructure = JSON.parse(fs.readFileSync(COLLECTIONS_FILE, 'utf-8'));
  } else {
    console.log('Generating collections structure from database...');
    collectionsStructure = await getCollectionsStructure();
    fs.writeFileSync(COLLECTIONS_FILE, JSON.stringify(collectionsStructure, null, 2));
  }

  return buildSchema(collectionsStructure);
}

async function getCollectionsStructure() {
  const db = getDb();
  const collections = await db.listCollections().toArray();
  const structure = {};

  for (const collection of collections) {
    const collectionName = collection.name;
    if (collectionName === '_init') continue;

    const fields = await getCollectionFields(db, collectionName);
    structure[collectionName] = fields;
  }
  return structure;
}

function buildSchema(collectionsStructure) {
  let typeDefinitions = `scalar JSON\n`;
  let queryFields = '';
  let mutationFields = '';

  for (const [collectionName, fields] of Object.entries(collectionsStructure)) {
    const typeName = capitalizeFirstLetter(collectionName);
    typeDefinitions += generateTypeDefinition(typeName, fields);
    typeDefinitions += generateInputTypeDefinition(typeName, fields);
    queryFields += generateQueryFields(typeName, collectionName);
    mutationFields += generateMutationFields(typeName, collectionName);
  }

  const filterableFields = `

    input FilterInput {
      field: String
      value: JSON
    }

    input SortInput {
      field: String
      order: String
    }

    input PaginationInput {
      limit: Int
      skip: Int
    }
  `;

  return gql`
    ${typeDefinitions}
    ${filterableFields}

    type Query {
      ${queryFields}
    }

    type Mutation {
      ${mutationFields}
    }
  `;
}

function generateQueryFields(typeName, collectionName) {
  return `
    ${collectionName}(id: ID!): ${typeName}
    all${typeName}s(
      filters: [FilterInput]
      sort: SortInput
      pagination: PaginationInput
    ): [${typeName}!]!
  `;
}

async function getCollectionFields(db, collectionName) {
  const sampleSize = 100; 
  const documents = await db.collection(collectionName).find().limit(sampleSize).toArray();
  const fields = {};

  for (const doc of documents) {
    for (const [key, value] of Object.entries(doc)) {
      if (key !== '_id') {
        fields[key] = getGraphQLType(value);
      }
    }
  }

  return fields;
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function generateTypeDefinition(typeName, fields) {
  let fieldDefinitions = 'id: ID!\n';
  const commonFields = {
    UpdatedAt: 'String',
    IsDeleted: 'Boolean',
    DeletedAt: 'String',
    UserIdDeleted: 'String',
    Uid: 'String',
    Email: 'String',
    DeletionDate: 'String'
  };

  const allFields = { ...commonFields, ...fields };

  for (const [key, type] of Object.entries(allFields)) {
    fieldDefinitions += `  ${key}: ${type}\n`;
  }

  return `type ${typeName} {\n${fieldDefinitions}}\n`;
}

function generateInputTypeDefinition(typeName, fields) {
  let fieldDefinitions = '';
  for (const [key, type] of Object.entries(fields)) {
    if (!['id', 'UpdatedAt', 'IsDeleted', 'DeletedAt', 'UserIdDeleted', 'Uid', 'DeletionDate'].includes(key)) {
      fieldDefinitions += `  ${key}: ${type}\n`;
    }
  }
  return `input ${typeName}Input {\n${fieldDefinitions}}\n`;
}

function getGraphQLType(value) {
  if (Array.isArray(value)) return '[JSON]';
  switch (typeof value) {
    case 'string': return 'String';
    case 'number': return Number.isInteger(value) ? 'Int' : 'Float';
    case 'boolean': return 'Boolean';
    case 'object': return value instanceof Date ? 'String' : 'JSON';
    default: return 'String';
  }
}

function generateMutationFields(typeName, collectionName) {
  return `
    create${typeName}(input: ${typeName}Input!): ${typeName}!
    update${typeName}(id: ID!, input: ${typeName}Input!): ${typeName}
    delete${typeName}(id: ID!): Boolean!
  `;
}

module.exports = generateDynamicSchema;