import mongoose from 'mongoose';

const pajarosSchema = new mongoose.Schema(
  {
    Title: String,
    Start:  String,
    End:  String,
    Description:  String,
    WebPage:  String,
    MediaCaption:  String,
    Media:  String,
    MediaCredit:  String,
    Tags:  String,
    Place:  String,
    Location: String,
    Source:  String,
    SourceURL: String,
    Notes:  String,
  },
  {
    timestamps: true,
  },
);

const Pajaros = mongoose.model('Pajaros', pajarosSchema);

export const getAllPajaros = async () => {
  try {
    return await Pajaros.find();
  } catch (error) {
    throw new Error(error);
  }
};

export const getPajarosResourceById = async (id) => {
  try {
    return await Pajaros.findById(id);
  } catch (error) {
    throw new Error(error);
  }
};

export const createPajarosResource = async (data) => {
  try {
    return await Pajaros.create({ ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const updatePajarosResource = async (id, data) => {
  try {
    return await Pajaros.findByIdAndUpdate(id, { ...data });
  } catch (error) {
    throw new Error(error);
  }
};

export const deletePajarosResource = async (id) => {
  try {
    return await Pajaros.findByIdAndDelete(id);
  } catch (error) {
    throw new Error(error);
  }
};

export default Pajaros;
