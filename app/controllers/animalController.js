import ApiError from '../../error/ApiError.js';
import animalService from '../services/animalService.js';

class AnimalController {
    async getAll(req, res) {
        try {
            let {limit, page} = req.query;
            page = page || 1; 
            limit = limit || 10;
            let offset = page * limit - limit;

            const animal = await animalService.findAll(limit, offset); 

            return res.json(animal);
        } catch (error) {
            return next(ApiError.internal(e.message));
        }
    }

    async getOne(req, res, next) {
        try {
            const {id} = req.params;

            const animal = await animalService.findOne(id);
            if (!animal) {
                return next(ApiError.badRequest("Animal with this id doesn't exist"));
            }

            return res.json(animal);
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async create(req, res, next) {
        try{
            const { name, description } = req.body;

            const animal = await animalService.create(name, description);

            return res.json(animal);
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async update(req, res, next) {
        try {
            const { id, name, description } = req.body;

            const animal = await animalService.update(id, name, description);

            if (!animal) {
                return next(ApiError.badRequest("Animal with this id doesn't exists"));
            }

            return res.json(animal);
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }

    async destroy(req, res, next) {
        try{
            const { id } = req.params;

            const animal = await animalService.findOne(id);

            if (!animal) {
                next(ApiError.badRequest("Animal with this id doesn't exists"));
            }

            await animalService.delete(id);
            
            return res.json(animal);
        } catch (e) {
            return next(ApiError.internal(e.message));
        }
    }
}

export default new AnimalController;