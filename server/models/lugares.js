import mongoose from 'mongoose';

const lugaresSchema = new mongoose.Schema(
  {
   Title: String,
    MediaCaption: String,
    Media: String,
    MediaCredit: String,
    Source: String,
  },
  {
    timestamps: true,
  },
);

const Lugares = mongoose.model('Lugares', lugaresSchema);

export const getAllLugares = async () => {
  try {
    return await Lugares.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getLugaresResourceById = async (id) => {
  try {
    return await Lugares.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createLugaresResource = async (data) => {
  try {
    return await Lugares.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updateLugaresResource = async (id, data) => {
  try {
    return await Lugares.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deleteLugaresResource = async (id) => {
  try {
    return await Lugares.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Lugares;
