import express from 'express';
import {
  createLugares,
  deleteLugaresById,
  getLugaresById,
  listLugares,
  updateLugaresById,
} from '../controller/lugares.js';

const lugaresRouter = express.Router();

// CRUD

// READ

// RESTful pattern for API

// NOTE: Always routes called controllers

// List all music resources
lugaresRouter.get('/lugares', listLugares);
// List a music resource
lugaresRouter.get('/lugares/:id', getLugaresById);
// Create
lugaresRouter.post('/lugares', createLugares);
// Update
lugaresRouter.put('/lugares/:id', updateLugaresById);
// Delete
lugaresRouter.delete('/lugares/:id', deleteLugaresById);

export default lugaresRouter;
