// Recebe as requisições para o banco de dados
const express = require("express");
const {
  createChurch,
  listChurch,
  findChurch,
  deleteChurch,
  updateChurch,
} = require("../controllers/churchController");

const router = express.Router();

router.post("/church", createChurch);

router.get("/churchs", listChurch).get("/church/:id", findChurch);

router.delete("/church/:id", deleteChurch);

router.patch("/church/:id", updateChurch);

module.exports = router;
