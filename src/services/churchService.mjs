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
      return await churchModel.find({}).populate("parishName").lean();
    } catch (err) {
      throw Error(err.message);
    }
  },

  find: async (id) => {
    try {
      return await churchModel.findById(id).populate("parishName").lean();
    } catch (err) {
      throw Error(err.message);
    }
  },

  findPartition: async (value) => {
    try {
      return await churchModel.find({
        $or: [{ $text: { $search: value } }],
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