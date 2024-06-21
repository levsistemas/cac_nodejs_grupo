const express = require('express');
const app = express();
const index = require('./index');
const next = require('./siguiente');
const router = express.Router();

const PORT = 3000;

app.use('/', index);

app.use('/', next);

app.listen( PORT, () => {
    console.log("Servidor de codo a codo grupo meeting: " + PORT);
});

module.exports = router;