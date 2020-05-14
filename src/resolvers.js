import {Cat} from "./models/Cat.js"

export const resolvers = {
    Query: {
        hello: () => 'DOES THIS WORK LMAO',  //this should match the query, you have to add commas 
        cats: () => Cat.find() 
    },
    Mutation: {
        //you'll always have the parent parameter, hence _, which means to ignore
        //the {name} is an object string that you destructure in here
        createCat: (_, {name}) => {
            const kitty = new Cat({name});
            kitty.save();
            console.log(kitty);
            return kitty;
            
        }
    }
}
