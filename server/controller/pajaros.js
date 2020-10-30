import {
  createPajarosResource,
  deletePajarosResource,
  getAllPajaros,
  getPajarosResourceById,
  updatePajarosResource,
} from '../models/pajaros.js';

// From the URL GET /music
export const listPajaros = async (request, response, next) => {
  try {
    const pajarosList = await getAllPajaros();
    return response.status(200).send(pajarosList);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }
};

// From the URL GET /music/:id
export const getPajarosById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;

  // Called a function that is declared in the resource model
  const pajarosResource = await getPajarosResourceById(id);

  // If we have a music resource
  if (pajarosResource) {
    // we return resource and 200 OK status
    return response.status(200).send(pajarosResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: Pajaros resource not found.',
    });
  }
};

// POST /music with JSON payload in the body
export const createPajaros = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)

  const { body } = request;

  try {
    // Called a function that is declared in the resource model
    const newPajarosResource = await createPajarosResource(body);
    return response.status(201).send(newPajarosResource);
  } catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /music/:id
export const updatePajarosById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;

  try {
    // Called a function that is declared in the resource model
    const pajarosResource = await updatePajarosResource(id, body);
    return response.status(200).send(pajarosResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /music/:id
export const deletePajarosById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deletePajarosResource(id);
    return response.status(200).send({
      message: deleteMessage,
    });
  } catch (error) {
    // if resource is not found send error message
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};
