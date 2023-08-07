import userResolvers from "./User.js";
import animalResolvers from './Animal.js';

const rootResolver = {};

const resolvers = [
    rootResolver,
    userResolvers,
    animalResolvers
];

export default resolvers;