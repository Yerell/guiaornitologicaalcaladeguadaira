import {
  createLugaresResource,
  deleteLugaresResource,
  getAllLugares,
  getLugaresResourceById,
  updateLugaresResource,
} from '../models/lugares.js';

// From the URL GET /Lugares
export const listLugares = async (request, response, next) => {
  try {
    const lugaresList = await getAllLugares();
    return response.status(200).send(lugaresList);
  } catch (error) {
    return response.status(500).send({
      message: `Error: connection to database failed, ${error}.`,
    });
  }
};

// From the URL GET /Lugares/:id
export const getLugaresById = async (request, response, next) => {
  // From the request object we can know the URL parameters defined in the router
  const {
    params: { id },
  } = request;

  // Called a function that is declared in the resource model
  const lugaresResource = await getLugaresResourceById(id);

  // If we have a music resource
  if (lugaresResource) {
    // we return resource and 200 OK status
    return response.status(200).send(lugaresResource);
  } else {
    // if not we sent 404 Resource not found, and a nice message
    return response.status(404).send({
      // Is important that messages that reflect errors finished with a full stop
      message: 'Error: Lugares resource not found.',
    });
  }
};

// POST /Lugares with JSON payload in the body
export const createLugares = async (request, response) => {
  // we get access to the data sent it by the client
  // TODO: In this step is IMPORTANT that we assume that the payload is malign
  // so we need to confirm otherwise validating payload (Please read about Joi https://hapi.dev/tutorials/validation/?lang=en_US)

  const { body } = request;

  try {
    // Called a function that is declared in the resource model
    const newPLugaresResource = await createLugaresResource(body);
    return response.status(201).send(newLugaresResource);
  } catch (error) {
    // Because Daytabases can be in other location we can't assume that every DB request is succesful
    return response.status(500).send({
      message: `Error: not connection to database, ${error}.`,
    });
  }
};

// From the URL PUT /Lugares/:id
export const updateLugaresById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
    body,
  } = request;

  try {
    // Called a function that is declared in the resource model
    const lugaresResource = await updateLugaresResource(id, body);
    return response.status(200).send(lugaresResource);
  } catch (error) {
    const { message } = error;
    return response.status(404).send({
      message,
    });
  }
};

// From the URL DELETE /Lugares/:id
export const deleteLugaresById = async (request, response) => {
  // we get access to the data sent it by the client
  const {
    params: { id },
  } = request;

  try {
    // Called a function that is declared in the resource model
    const deleteMessage = await deleteLugaresResource(id);
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
