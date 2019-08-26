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
routes.get("/factorial", FactorialController.factorial.index);
routes.get("/factorial/:keyNumber", FactorialController.factorial.show);

/**
 * Exports
 */
module.exports = routes;
