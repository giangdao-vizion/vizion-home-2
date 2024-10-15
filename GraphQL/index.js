const { ApolloServer } = require('apollo-server');
const generateResolvers = require('./resolvers');
const { connectToDatabase } = require('./db');
const generateDynamicSchema = require('./schema');

async function startServer() {
  await connectToDatabase();

  const typeDefs = await generateDynamicSchema();
  const resolvers = await generateResolvers();

  const server = new ApolloServer({ 
    typeDefs, 
    resolvers,
    context: () => ({
      db: require('./db').getDb()
    })
  });

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
  });
}

startServer();