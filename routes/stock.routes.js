const { Router } = require('express');
const StockController = require('../controllers/StockController');

const chatRoute = Router();

chatRoute.get('/', StockController.index);
chatRoute.get('/show/:id', StockController.show);
chatRoute.post('/', StockController.store);
chatRoute.put('/:id', StockController.update);
chatRoute.delete('/:id', StockController.destroy);
//chatRoute.patch('/sent/:id', SentMessageController.sent);
module.exports = chatRoute;
