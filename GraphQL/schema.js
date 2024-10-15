const { gql } = require('apollo-server');
const data = require('./datavizion.json');

// Recursive function to generate nested GraphQL types dynamically
const generateFields = (obj, typeName) => {
  let fields = '';
  for (const [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      if (typeof value[0] === 'object' && value[0] !== null) {
        const nestedTypeName = capitalize(key);
        fields += `${key}: [${nestedTypeName}]\n`;
        createTypeDefinitions(nestedTypeName, value[0]); // Recursively create type for nested array objects
      } else {
        fields += `${key}: [${getGraphQLType(value[0])}]\n`;
      }
    } else if (typeof value === 'object' && value !== null) {
      const nestedTypeName = capitalize(key);
      fields += `${key}: ${nestedTypeName}\n`;
      createTypeDefinitions(nestedTypeName, value); // Recursively create type for nested objects
    } else {
      fields += `${key}: ${getGraphQLType(value)}\n`;
    }
  }
  return fields;
};

// Helper function to capitalize the first letter of a string (used for type names)
const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

// Helper function to map JavaScript types to GraphQL types
const getGraphQLType = (value) => {
  switch (typeof value) {
    case 'string': return 'String';
    case 'number': return 'Float';
    case 'boolean': return 'Boolean';
    default: return 'String'; // fallback
  }
};

// Store dynamically generated types to avoid duplication
let typeDefinitions = '';

// Function to create type definitions dynamically based on JSON structure
const createTypeDefinitions = (typeName, obj) => {
  const fields = generateFields(obj);
  typeDefinitions += `
    type ${typeName} {
      ${fields}
    }
  `;
};

// Generate root types (Tour, Customer, Scene)
createTypeDefinitions('Tour', data.tour);
createTypeDefinitions('Customer', data.customer);
createTypeDefinitions('Scenes', data.scenes[0]);
createTypeDefinitions('Media', data.media[0]);
createTypeDefinitions('Group',data.groups[0]);

// Generate GraphQL schema
const typeDefs = gql`
  ${typeDefinitions}

  type Query {
    tour(id: ID!): Tour
    customer(id: ID!): Customer
    scenes(id: ID!): Scenes
    media(id: ID!): Media
    group(id: ID!): Group
    # groupScenes(groupId: ID!, sceneId: ID!): scenes
  }

  type Mutation {
    createTour(id: ID!, title: String!): Tour
    updateTour(id: ID!, title: String!): Tour
    deleteTour(id: ID!): Boolean
    
    createCustomer(id: ID!, name: String!): Customer
    updateCustomer(id: ID!, name: String!): Customer
    deleteCustomer(id: ID!): Boolean
    
    createScene(id: ID!, title: String!): Scenes
    updateScene(id: ID!, title: String!): Scenes
    deleteScene(id: ID!): Boolean
    
    createMedia(id: ID!, title: String!): Media
    updateMedia(id: ID!, title: String!): Media
    deleteMedia(id: ID!): Boolean
    
    createGroup(id: ID!, title: String!): Group
    updateGroup(id: ID!, title: String!): Group
    deleteGroup(id: ID!): Boolean
  }
`;

module.exports = typeDefs;
