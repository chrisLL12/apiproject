import express from 'express';
import graphqlHTTP from 'express-graphql';
import resolvers from './graphql/resolvers';
import schema from './graphql/schema';

const app = express();
app.use(express.json());

const env = process.env.NODE_ENV || 'development';

app.use('/api/graphql', graphqlHTTP ({
    schema,
    rootValue: resolvers,
    graphiql: env === 'development'
}));

const staticRoute = express.static('public');
app.use('/static', staticRoute);
app.use('/', staticRoute);

app.listen(8000, () =>
    console.log(`Listening on port 8000!`));

export default app;


