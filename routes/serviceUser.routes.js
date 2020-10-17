const { Router } = require('express');
const userService = require('../controllers/userService');

const rotinha = Router();

rotinha.get('/:id', userService.rotinha);

module.exports = rotinha;
