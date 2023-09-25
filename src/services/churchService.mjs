import diacritics from "diacritics";

import churchModel from "#models/churchModel.mjs";

const churchService = {
  create: async (church) => {
    try {
      return await churchModel.create(church);
    } catch (err) {
      throw Error(err.message);
    }
  },

  list: async () => {
    try {
      return await churchModel.find({}).populate("_paroquia").lean();
    } catch (err) {
      throw Error(err.message);
    }
  },

  find: async (id) => {
    try {
      return await churchModel.findById(id).populate("_paroquia").lean();
    } catch (err) {
      throw Error(err.message);
    }
  },

  findPartition: async (value) => {
    try {
      const textSearch = new RegExp(diacritics.remove(value), "i");

      return await churchModel
        .find({
          // $text: { $search: textSearch }, //Nao trabalha com porções de texto
          slugFields: { $regex: textSearch }, //Considera acentos na pesquisa
        })
        .populate("_paroquia")
        .lean();
    } catch (err) {
      throw Error(err.message);
    }
  },

  delete: async (id) => {
    try {
      return await churchModel.findByIdAndDelete(id);
    } catch (err) {
      throw Error(err.message);
    }
  },

  update: async (id, church) => {
    try {
      return await churchModel.findByIdAndUpdate(id, church, { new: true });
    } catch (err) {
      throw Error(err.message);
    }
  },
};

export default churchService;
