const { UserType } = require('../graphql/Types');
const { GraphQLObjectType, GraphQLList, GraphQLID} = require('graphql');
const User = require('../models/User');




const user = {
    name: "user",
    type: new GraphQLList(UserType),
    resolve: async (parent, args) => {
        const user = await User.find();
        return user;
    }
};





const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        user,
        
    }
});






module.exports = RootQuery;



/*
const { GraphQLObjectType } = require('graphql');
const { ClubType } = require('../types');




const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        clubs: {
            name: "Clubs",
            type: ClubType,
            resolve: (parent, args) => {
                return {
                    club: "Some club",
                    league: "Some league"
                };
            }
        }
    }
});


module.exports = RootQuery;
*/