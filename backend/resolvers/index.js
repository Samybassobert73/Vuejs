const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');
const { UserType } = require('../graphql/Types');
const user = require('../models/User');


const addUser = {
    name: "addUser",
    type: UserType,
    args: { name: { type: GraphQLString }, email: { type: GraphQLString } },
    resolve: async (parent, args) => {
        console.log(args.name, args.email);
        const newuser = new user({ name: args.name, email: args.email });
        const new_user = await newuser.save();
        return new_user;
    }
}


const deleteUser = {
    name: "deleteUser",
    type: UserType,
    args: { id: { type: GraphQLID } },
    resolve: async (parent, args) => {
        const deleted_user = await user.findByIdAndDelete(args.id);
        return deleted_user;
    }
}


const updateUser = {
    name: "updateUser",
    type: UserType,
    args: { 
        id: { type: GraphQLID },    
        name: { type: GraphQLString }, 
        email: { type: GraphQLString } 
    },
    resolve: async (parent, args) => {
        const update_user = await user.findByIdAndUpdate(args.id, {
            name: args.name,
            email: args.email
        });
        return update_user;
    }
}




const RootMutation = new GraphQLObjectType({
    name: "RootMutation",
    fields: {
        addUser,
        deleteUser,
        updateUser
    }
});




module.exports = RootMutation;