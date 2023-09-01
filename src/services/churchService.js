// Trata das regras de negóicio
const { check } = require("express-validator");
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

exports.findChurchPartition = async (value) => {
  try {
    return await userChurch.find({
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
