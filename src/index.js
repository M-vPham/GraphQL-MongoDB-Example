import { ApolloServer} from "apollo-server-express";
import ApolloClient from 'apollo-boost';
import {gql} from "apollo-boost";
import express from 'express';
import mongoose from "mongoose";
import { typeDefs } from "./typeDefs.js";
import { resolvers } from "./resolvers.js"; 




const startServer = async() => { 
    const app = express(); 

    const server = new ApolloServer({
        //These will be defined for both new or existing servers
        typeDefs,
        resolvers
    });
    
    
    server.applyMiddleware({app}); //Apollo adds middleware to our server that allows graphql request
    // Connecting to the MongoDB server through Mongoose 
    //after localhost:27017/NAMEOFYOURDATABASE
    await mongoose.connect('mongodb://localhost:27017/test1', {useNewUrlParser: true, useUnifiedTopology: true});


    app.listen({ port:4000}, () =>
        console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
    );
    console.log("BITCH WHY ISN'T THIS SHOWING UP")
}

startServer();