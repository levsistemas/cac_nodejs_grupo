const express = require('express');
const router = express.Router();
const app = express();

app.use(express.static('public'));

router.get('/next', (req, res) => {
    try {
        res.send(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Inicio</title>
            <style>
                body {
                    background-color: grey;
                }
                h2 {
                    color: white;
                }
                a {
                    font-size: 2em;
                    color: white;
                }
            </style>
        </head>
        <body>
            <div>
            <h1>Bienvenidos a SIGUIENTE</h1>
            <h2>Bienvenida Carmen</h2>
            <h2>Bienvenida Mariana</h2>
            <h2>Bienvenido Cristian</h2>
            <h2>Bienvenido Leandro</h2>
            <p>Aguante Codo a Codo</p>
            <a href="/">VOLVER A PRINCIPAL</a>
            </div>
        </body>
        </html>`
        );
    } catch (error) {
        res.status(404).json({error: 'No encontrado'});
    }
})

module.exports = router;