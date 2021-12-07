const {GraphQLString, GraphQLID, GraphQLObjectType} = require('graphql');


const UserType = new GraphQLObjectType({
    name: "user",
    fields: ()=>({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString}
    })
});







module.exports = {UserType};