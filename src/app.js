//Importamos libreria de express

const express = require('express');

//ejecutamos la funcion
const app = express();

//configuramos el puerto ,el cual pregunta si ya tiene uno creado y si no que sea el 300
const PORT = process.env.PORT || 3000;


//iMPORTAMOS la ruta donde va a estar nuestro funcionamiento de la app
const docentesRouter = require('./routes/docentes.routes');


//cargamos la funcion de middleware
app.use(express.json())
app.use('/alumnos',docentesRouter.router);

//app.LISTEN pone a escuchar al servidor en el puerto 3000
app.listen(PORT, ()=>{console.log(`App lista escuhando en el puerto ${PORT}`)} );