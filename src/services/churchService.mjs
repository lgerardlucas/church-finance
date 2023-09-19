import churchModel from "../models/churchModel.mjs";

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
      const regex = new RegExp(value, "i");

      return await churchModel.find({
        name: { $regex: regex },
      });
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
