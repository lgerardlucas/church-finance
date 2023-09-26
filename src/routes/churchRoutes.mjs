import express from "express";
import Model from "#models/churchModel.mjs";

import ChurchController from "#controllers/church.mjs";

const router = express.Router();

const controller = new ChurchController(Model);

router.post("/church", controller.create.bind(controller));

router
  .get("/churchs", controller.list.bind(controller))
  .get("/church/filter/:name", controller.findPartition.bind(controller))
  .get("/church/:id", controller.find.bind(controller));

router.delete("/church/:id", controller.delete.bind(controller));

router.patch("/church/:id", controller.update.bind(controller));

export { router as churchRoutes };
