import { Router } from 'express';
import animalController from '../app/controllers/animalController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const routes = new Router();

routes.get('/', animalController.getAll);
routes.get('/:id', animalController.getOne);
routes.post('/', authMiddleware, animalController.create);
routes.put('/', authMiddleware, animalController.update);
routes.delete('/:id', authMiddleware, animalController.destroy);

export default routes;