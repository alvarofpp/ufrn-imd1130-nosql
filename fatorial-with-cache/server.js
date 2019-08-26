const express = require('express');
const app = express();
const requireDir = require("require-dir");
const port = 3000;

// Models
// requireDir("./src/models");

// Routes
app.use('/', require('./src/routes/web'));

// Listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
