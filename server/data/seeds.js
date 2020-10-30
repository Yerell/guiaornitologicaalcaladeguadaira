import mongoose from 'mongoose';
import { databaseURI } from '../index.js';
import pajarosData from './pajaros.js';
import Pajaros from '../models/pajaros.js';
import lugaresData from './lugares.js';
import Lugares from '../models/lugares.js';

mongoose.connect(databaseURI, {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Promise.all(
  pajarosData.map(async (pajarosItem) => {
    const pajarosResource = await Pajaros.create({ ...pajarosItem });
    console.log(
      `The resource ${JSON.stringify(pajarosResource)} has been created`,
    );
  }),
);

Promise.all(
  lugaresData.map(async (lugaresItem) => {
    const lugaresResource = await Lugares.create({ ...lugaresItem });
    console.log(
      `The resource ${JSON.stringify(lugaresResource)} has been created`,
    );
  }),
);
