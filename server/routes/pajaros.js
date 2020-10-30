import express from 'express';
import {
  createPajaros,
  deletePajarosById,
  getPajarosById,
  listPajaros,
  updatePajarosById,
} from '../controller/pajaros.js';

const pajarosRouter = express.Router();

// CRUD

// READ

// RESTful pattern for API

// NOTE: Always routes called controllers

// List all music resources
pajarosRouter.get('/pajaros', listPajaros);
// List a music resource
pajarosRouter.get('/pajaros/:id', getPajarosById);
// Create
pajarosRouter.post('/pajaros', createPajaros);
// Update
pajarosRouter.put('/pajaros/:id', updatePajarosById);
// Delete
pajarosRouter.delete('/pajaros/:id', deletePajarosById);

export default pajarosRouter;
