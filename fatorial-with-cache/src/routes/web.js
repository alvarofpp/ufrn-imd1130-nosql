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
routes.get("/factorial", (req, res) => {
    return res.send("PEGA PORRA.");
});
// Factorial resource
routes.get("/factorial/:keyNumber", FactorialController.factorial.show);
routes.get("/factorial/ler", FactorialController.factorial.ler);
routes.get("/factorial/escrever", FactorialController.factorial.escrever);

/**
 * Exports
 */
module.exports = routes;
