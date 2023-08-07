import animalService from '../app/services/animalService.js';

const animalResolvers = {
    Query: {
        getAllAnimals: async(parent, { limit, offset }) => {
            return await animalService.findAll(limit, offset);
        },
        getAnimal: async(parent, { id }) => {
            return await animalService.findOne(id);
        }
    },
    Mutation: {
        createAnimal: async (parent, { input }) => {
            const {name, description} = input;

            const animal = await animalService.create(name, description);

            return animal;
        },
        editAnimal: async (parent, { id, name, description }) => {
            animalService.update(id, name, description)
    
            const animal = await animalService.findOne(id);
    
            if (!animal) {
                throw new Error("Animal with this id doesn't exists");
            }
    
            return movie;
        },
        deleteAnimal: async (parent, { id }) => {
            const animal = await animalService.findOne(id);

            if (!animal) {
                throw new Error("Animal with this id doesn't exists");
            }
    
            await animalService.delete(id)
            
            return animal;
        }
    },
}

export default animalResolvers;