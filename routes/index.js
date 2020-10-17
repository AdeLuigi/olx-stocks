const { Router, json } = require('express');

const userRoutes = require('./user.routes');
const chatRoutes = require('./chat.routes');
const stockRoutes = require('./stock.routes');


const routes = Router();
routes.use(json());

routes.use('/user', userRoutes);
routes.use('/chat', chatRoutes);
routes.use('/stock', stockRoutes);


/* routes.use('/user', userRoutes);
routes.use('/chat', chatRoutes); */


module.exports = routes;
