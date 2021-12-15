
//Importamos nuestras herramientas
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const db = require ('./db.js');
const router = require('./router.js');
const { listen } = require('express/lib/application');
const app = express();

//Configuracion del puerto
const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=> res.send('Hello World'));

//Iniciamos el servidor
app.listen (PORT, () => {
	console.log('Bienvenido a Express');
});


//Routing
