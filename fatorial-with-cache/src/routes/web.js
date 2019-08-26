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
routes.get("factorial/:keyNumber", FactorialController.show);
routes.get("ler", FactorialController.ler);
routes.get("escrever", FactorialController.escrever);

/**
 * Exports
 */
module.exports = routes;
