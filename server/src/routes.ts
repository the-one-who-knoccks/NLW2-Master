import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionController from './controllers/ConnectionControllers';


const routes = express.Router(); // Modulo de roteamento do express
const classControllers = new ClassesController();
const connectionsControllers = new ConnectionController();

routes.get('/classes', classControllers.index);
routes.post('/classes', classControllers.create);

routes.get('/connections', connectionsControllers.index)
routes.post('/connections', connectionsControllers.create)

export default routes;