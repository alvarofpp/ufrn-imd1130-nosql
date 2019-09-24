const express = require('express');
const app = express();
const port = 3000;

// Routes
app.use('/', require('./src/routes/web'));

// Listen
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
