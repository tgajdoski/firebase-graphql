import * as express from 'express';
import * as cors from 'cors';
import * as functions from 'firebase-functions';
import * as apolloServerExpress from 'apollo-server-express';
import * as schemaPrinter from 'graphql/utilities/schemaPrinter';
const schema = require('./graphql/schema');

const app = express();
// BODYPARSER IS ALREADY IMPLEMENTED BY FIREBASE
app.use(cors());
app.options('*', cors());
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  return next();
});
app.use(
  '/graphql',
  apolloServerExpress.graphqlExpress({ schema })
);
app.use(
  '/graphiql',
  apolloServerExpress.graphiqlExpress({ endpointURL: '/api/graphql' })
);
app.use('/schema', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(schemaPrinter.printSchema(schema));
});
exports.api = functions.https.onRequest(app);
