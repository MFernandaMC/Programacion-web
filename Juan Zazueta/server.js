//importaciobn de librerias
const express = require('express');
const cors = require('cors');
const users = require('./database');

//creacion de objetos
const app = express();
const port = 3000;

//Configuracion del servidor
app.use(cors());
app.use(express.json());

//------------RUTAS-----------------
app.get('/usuarios', (req, res) => {
    users.obtenerUsuarios((dbuser) => {
        res.json({ users: dbuser });
    });
})
app.post('/usuarios', (req, res) => {
    res.send('Agregar usuarios');
})
app.put('/usuarios', (req, res) => {
    res.send('Actualizar usuarios');
})
app.patch('/usuarios', (req, res) => {
    res.send('Editar usuarios');
})
app.delete('/usuarios', (req, res) => {
    res.send('Eliminar usuarios');
})

//escuchador de peticiones
app.listen(port, () => {
    console.log("servidor iniciado");
});
