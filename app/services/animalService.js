import Animal from "../../models/animalModels.js";


class AnimalService {

    async findAll(limit, offset) {
        const animal = await Animal.findAndCountAll({ limit, offset });
        return animal;
    }

    async findOne(id) {
        const animal = await Animal.findOne({where: {id}});
        return animal;
    }

    async create(name, description) {
        const animal = await Animal.create({name, description});
        return animal;
    }

    async update(id, name, description) {
        await Animal.update({name, description}, {
            where: {id}
        })

        const animal = await Animal.findOne({where: {id}});

        return animal;
    }

    async delete(id) {
        await Animal.destroy({where: {id}});
    }
}

export default new AnimalService;