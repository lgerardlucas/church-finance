// Lida com as requisições para o banco de dados
const {
  createChurch,
  listChurch,
  findChurch,
  deleteChurch,
  updateChurch,
} = require("../services/churchService");

exports.createChurch = async (req, res) => {
  try {
    const church = await createChurch(req.body);
    res.status(200).json(church);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.listChurch = async (req, res) => {
  try {
    const churchs = await listChurch();
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.findChurch = async (req, res) => {
  try {
    const churchs = await findChurch(req.params.id);
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.deleteChurch = async (req, res) => {
  try {
    const churchs = await deleteChurch(req.params.id);
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

exports.updateChurch = async (req, res) => {
  try {
    const churchs = await updateChurch(req.params.id, req.body);
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
