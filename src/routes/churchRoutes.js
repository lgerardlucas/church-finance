// routes/churchRoutes.js
const express = require("express");
const userChurch = require("../models/churchModel");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const church = await userChurch.create(req.body);
    res.status(200).json(church);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/list", async (req, res) => {
  try {
    const churchs = await userChurch.find({});
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.get("/search/:id", async (req, res) => {
  try {
    const churchs = await userChurch.findById(req.params.id);
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    const churchs = await userChurch.findByIdAndDelete(req.params.id);
    res.status(200).json(churchs);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.patch("/update/:id", async (req, res) => {
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
});

module.exports = router;
