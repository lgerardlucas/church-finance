// Trata das regras de negóicio
const userChurch = require("../models/churchModel");

exports.createChurch = async (church) => {
  try {
    return await userChurch.create(church);
  } catch (err) {
    throw Error(err.message);
  }
};

exports.listChurch = async () => {
  try {
    return await userChurch.find({});
  } catch (err) {
    throw Error(err.message);
  }
};

exports.findChurch = async (id) => {
  try {
    return await userChurch.findById(id);
  } catch (err) {
    throw Error(err.message);
  }
};

exports.deleteChurch = async (id) => {
  try {
    return await userChurch.findByIdAndDelete(id);
  } catch (err) {
    throw Error(err.message);
  }
};

exports.updateChurch = async (id, church) => {
  try {
    return await userChurch.findByIdAndUpdate(id, church, { new: true });
  } catch (err) {
    throw Error(err.message);
  }
};
