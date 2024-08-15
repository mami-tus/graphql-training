import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './schema';
import { addMocksToSchema } from '@graphql-tools/mock';
import { makeExecutableSchema } from '@graphql-tools/schema';

async function startApolloServer() {
  const server = new ApolloServer({
    schema: addMocksToSchema({
      schema: makeExecutableSchema({ typeDefs }),
    }),
  });
  const { url } = await startStandaloneServer(server, {
    // 4000 ポートすでに使われているので 4001 に変更
    listen: { port: 4001 },
  });
  console.log(`
    🚀  Server is running!
    📭  Query at ${url}
    `);
}

startApolloServer();
