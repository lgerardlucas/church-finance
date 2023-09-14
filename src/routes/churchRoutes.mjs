// Recebe as requisições para o banco de dados
import express from "express";
import { check } from "express-validator";
import churchController from "../controllers/churchController.mjs";

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
    .isLength({ min: 2, max: 2 })
    .withMessage("Mínimo de 2 caracteres.")
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

router.post("/church", validateChurchFields, churchController.createChurch);

router
  .get("/churchs", churchController.listChurch)
  .get("/church/:id", churchController.findChurch)
  .get("/church/filter/:name", churchController.findChurchPartition);

router.delete("/church/:id", churchController.deleteChurch);

router.patch(
  "/church/:id",
  validateChurchFields,
  churchController.updateChurch
);

export { router as churchRoutes };
