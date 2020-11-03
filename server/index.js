import express from 'express'
import bodyParser from 'body-parser'
import logger from './lib/logger.js';
import mongoose from 'mongoose';
// middlewares
import httpLoggerMiddleware from './middleware/logger-middleware.js';
import jsonResponseMiddleware from './middleware/json-response.js';
import errorHandlerMiddleware from './middleware/error-handler.js';
import pajarosRouter from './routes/pajaros.js';
import lugaresRouter from './routes/lugares.js';
import cors from 'cors';

import dotenv from 'dotenv';


const HOST = '127.0.0.1';
const PORT = 5000;
export const databaseURI = 'mongodb://localhost/pajaros';
// const databaseURI = 'mongodb://localhost:2700/mongoose-intro
// Creacion del servidor
const server = express();
mongoose.connect(process.env.MONGODB_URI);

/*mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
*/
// El servidor utilizará como deserializador de data bodyparser y deserializara en JSON
dotenv.config();
server.use(bodyParser.json());
// Utiliza un middleware que permite tener descripciones mas especificas en la consola
server.use(httpLoggerMiddleware);
// Utiliza un middleware que permite crear headers de respuesta que indiquen que el contenido es JSON
server.use(jsonResponseMiddleware);
server.use(cors());

// El router de musica
server.use(pajarosRouter);

server.use(lugaresRouter);
// Sino no hay rutas definidas envia error al cliente
server.use(errorHandlerMiddleware);

// Inicializa el servidor


server.listen(process.env.PORT, () =>
  console.log(`Running on port ${process.env.PORT}`),
);


