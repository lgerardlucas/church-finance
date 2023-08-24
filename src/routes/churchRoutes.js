// routes/churchRoutes.js
const express = require("express");
const userChurch = require("../models/churchModel");
const {
  createChurch,
  listChurch,
  findChurch,
  deleteChurch,
  updateChurch,
} = require("../controllers/churchController");

const router = express.Router();

router.post("/", createChurch);

router.get("/", listChurch).get("/:id", findChurch);

router.delete("/:id", deleteChurch);

router.patch("/:id", updateChurch);

module.exports = router;
