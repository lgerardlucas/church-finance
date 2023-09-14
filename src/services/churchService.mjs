import churchModel from "../models/churchModel.mjs";

const churchService = {
  createChurch: async (church) => {
    try {
      return await churchModel.create(church);
    } catch (err) {
      throw Error(err.message);
    }
  },

  listChurch: async () => {
    try {
      return await churchModel.find({});
    } catch (err) {
      throw Error(err.message);
    }
  },

  findChurch: async (id) => {
    try {
      return await churchModel.findById(id);
    } catch (err) {
      throw Error(err.message);
    }
  },

  findChurchPartition: async (value) => {
    try {
      return await churchModel.find({
        $or: [
          { name: { $regex: value, $options: "i" } },
          { address: { $regex: value, $options: "i" } },
          { district: { $regex: value, $options: "i" } },
          { city: { $regex: value, $options: "i" } },
          { state: { $regex: value, $options: "i" } },
          { country: { $regex: value, $options: "i" } },
          { zipecode: { $regex: value, $options: "i" } },
          { type: { $regex: value, $options: "i" } },
        ],
      });
    } catch (err) {
      throw Error(err.message);
    }
  },

  deleteChurch: async (id) => {
    try {
      return await churchModel.findByIdAndDelete(id);
    } catch (err) {
      throw Error(err.message);
    }
  },

  updateChurch: async (id, church) => {
    try {
      return await churchModel.findByIdAndUpdate(id, church, { new: true });
    } catch (err) {
      throw Error(err.message);
    }
  },
};

export default churchService;
