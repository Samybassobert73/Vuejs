const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const graphql= require('graphql');
const GraphQLSchema = graphql.GraphQLSchema;
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://root:root@cluster0.ec7mn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));



const RootQuery = require('./schema/index');
const RootMutation = require('./resolvers/index');






app.use(cors());





 app.use('/graphql', graphqlHTTP({
     schema: new GraphQLSchema({query: RootQuery, mutation: RootMutation}),
     graphiql: true,
 }));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log('Server is running on: ' + PORT));