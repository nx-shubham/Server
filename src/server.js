/* eslint-disable no-unneeded-ternary */
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import bodyParser from 'body-parser';
import express from 'express';
const graphqlExpress = require('express-graphql');
import http from 'http';
import schema from '.';
// import configurations from './config/configuration';
// import authMiddleware from './lib/authMiddleware';

const app = express();

export const server = new ApolloServer({
  schema: makeExecutableSchema(schema),
});

server.applyMiddleware({app});
export const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen(4000, () => {
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`); // eslint-disable-line 
});
