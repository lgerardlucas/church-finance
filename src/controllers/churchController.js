const userChurch = require("../models/churchModel");

exports.createChurch = async (req, res) => {
  try {
    const church = await userChurch.create(req.body);
    res.status(200).json(church);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.listChurch = async (req, res) => {
  try {
    const churchs = await userChurch.find({});
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findChurch = async (req, res) => {
  try {
    const churchs = await userChurch.findById(req.params.id);
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteChurch = async (req, res) => {
  try {
    const churchs = await userChurch.findByIdAndDelete(req.params.id);
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateChurch = async (req, res) => {
  try {
    const churchs = await userChurch.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
