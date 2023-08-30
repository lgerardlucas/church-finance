// Recebe as requisições para o banco de dados
const express = require("express");
const { check } = require("express-validator");
const {
  createChurch,
  listChurch,
  findChurch,
  deleteChurch,
  updateChurch,
} = require("../controllers/churchController");

const router = express.Router();

// Validar campos de uma requisição
const validateChurchFields = [
  check("name")
    .optional({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage("Mínimo de 5 caracteres.")
    .custom((value, { req }) => {
      if (!value && req.method === "PATCH") {
        throw new Error("O campo não pode estar vazio");
      }
      return true;
    }),

  check("address")
    .optional({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage("Mínimo de 5 caracteres.")
    .custom((value, { req }) => {
      if (!value && req.method === "PATCH") {
        throw new Error("O campo não pode estar vazio");
      }
      return true;
    }),

  check("city")
    .optional({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage("Mínimo de 5 caracteres.")
    .custom((value, { req }) => {
      if (!value && req.method === "PATCH") {
        throw new Error("O campo não pode estar vazio");
      }
      return true;
    }),

  check("state")
    .optional({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage("Mínimo de 5 caracteres.")
    .custom((value, { req }) => {
      if (!value && req.method === "PATCH") {
        throw new Error("O campo não pode estar vazio");
      }
      return true;
    }),

  check("country")
    .optional({ checkFalsy: true })
    .isLength({ min: 5 })
    .withMessage("Mínimo de 5 caracteres.")
    .custom((value, { req }) => {
      if (!value && req.method === "PATCH") {
        throw new Error("O campo não pode estar vazio");
      }
      return true;
    }),

  check("zipcode")
    .optional({ checkFalsy: true })
    .isNumeric()
    .withMessage("Campo deve conter somente números")
    .isLength({ min: 8, max: 8 })
    .withMessage("Campo deve ter 8 dígitos.")
    .custom((value, { req }) => {
      if (!value && req.method === "PATCH") {
        throw new Error("O campo não pode estar vazio");
      }
      return true;
    }),
];

router.post("/church", validateChurchFields, createChurch);

router.get("/churchs", listChurch).get("/church/:id", findChurch);

router.delete("/church/:id", deleteChurch);

router.patch("/church/:id", validateChurchFields, updateChurch);

module.exports = router;
