/**
 * Require
 */
const express = require('express');
const routes = express.Router();

/**
 * Controllers
 */
const FactorialController = require('../controllers/FactorialController');

/**
 * Routes
 */
// Home
routes.get("", (req, res) => {
    return res.send("Factorial with cache.");
});
// Factorial resource
routes.get("factorial/:keyNumber", FactorialController.cache.show);
routes.get("ler", FactorialController.cache.ler);
routes.get("escrever", FactorialController.cache.escrever);

/**
 * Exports
 */
module.exports = routes;
