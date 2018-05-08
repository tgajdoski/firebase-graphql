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
  // console.log('req:', req);
  // console.log('token:', req.header('Authentication'));
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  return next();
});
app.use(
  '/graphql',
  apolloServerExpress.graphqlExpress(req => {
    return ({
      schema: schema,
      context: {
        token: req.header('Authentication'),
      },
    });
  })
);
app.use(
  '/graphiql',
  apolloServerExpress.graphiqlExpress(req => {
    return (
      { 
        endpointURL: '/api/graphql' ,
        context: {
          token: req.header('Authentication'),
        }
      });
  }) 
);
app.use('/schema', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(schemaPrinter.printSchema(schema));
});
exports.api = functions.https.onRequest(app);
