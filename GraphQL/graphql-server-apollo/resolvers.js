const { ObjectId } = require('mongodb');
const { GraphQLScalarType, Kind } = require('graphql');
const { GraphQLJSON } = require('graphql-type-json');

const JSONScalar = new GraphQLScalarType({
  name: 'JSON',
  description: 'JSON custom scalar type',
  serialize(value) {
    return value;
  },
  parseValue(value) {
    return value;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.OBJECT) {
      return ast.value;
    }
    return null;
  },
});

const generateResolvers = async () => {
  const db = require('./db').getDb();
  const collections = await db.listCollections().toArray();

  function buildFilterObject(filters) {
    return filters.reduce((acc, filter) => {
      const { field, value } = filter;

      // Xử lý giá trị null
      if (value === null) {
        acc[field] = null;
      } 
      // Xử lý giá trị boolean hoặc các loại giá trị đơn giản
      else if (typeof value === 'boolean' || typeof value === 'string' || typeof value === 'number') {
        acc[field] = value;
      } 
      // Xử lý regex
      else if (typeof value === 'string' && value.startsWith('/') && value.endsWith('/')) {
        acc[field] = { $regex: value.slice(1, -1), $options: 'i' };
      } 
      // Xử lý trường hợp Object cho $elemMatch
      else if (typeof value === 'object' && !Array.isArray(value)) {
        acc[field] = { $elemMatch: value };
      } 

      return acc;
    }, {});
  }

  const resolvers = {
    JSON: JSONScalar,
    JSON: GraphQLJSON,
    Query: {},
    Mutation: {}
  };

  for (const collection of collections) {
    const collectionName = collection.name;
    if (collectionName === '_init') continue;

    const typeName = capitalizeFirstLetter(collectionName);

    // Query resolvers
    resolvers.Query[collectionName] = async (_, { id }) => {
      return await db.collection(collectionName).findOne({ _id: new ObjectId(id) });
    };

    resolvers.Query[`all${typeName}s`] = async (_, { filters, sort, pagination }) => {
      let pipeline = [];

      if (filters && filters.length > 0) {
        const filterObject = buildFilterObject(filters);
        console.log('Filter Object:', filterObject);
        pipeline.push({ $match: filterObject });
      }

      if (sort) {
        pipeline.push({ $sort: { [sort.field]: sort.order === 'DESC' ? -1 : 1 } });
      }

      if (pagination) {
        if (pagination.skip) pipeline.push({ $skip: pagination.skip });
        if (pagination.limit) pipeline.push({ $limit: pagination.limit });
      }

      const results = await db.collection(collectionName).aggregate(pipeline).toArray();
      return results.map(doc => ({
        id: doc._id.toString(),
        ...doc
      }));
    };

    // Mutation resolvers
    resolvers.Mutation[`update${typeName}`] = async (_, { id, input }) => {
      const objectId = new ObjectId(id);
      const result = await db.collection(collectionName).findOneAndUpdate(
        { _id: objectId },
        { $set: input },
        { returnDocument: 'after' }
      );
      return result.value; // Trả về giá trị sau khi cập nhật
    };

    resolvers.Mutation[`delete${typeName}`] = async (_, { id }) => {
      const result = await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
      return result.deletedCount === 1;
    };
  }

  return resolvers;
};

module.exports = generateResolvers;

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
