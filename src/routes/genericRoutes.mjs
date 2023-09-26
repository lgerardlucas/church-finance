import express from "express";

function createRoutes(controller) {
  const router = express.Router();

  router.post("/church", controller.create.bind(controller));

  router
    .get("/churchs", controller.list.bind(controller))
    .get("/church/filter/:name", controller.findPartition.bind(controller))
    .get("/church/:id", controller.find.bind(controller));

  router.delete("/church/:id", controller.delete.bind(controller));
  router.patch("/church/:id", controller.update.bind(controller));

  return router;
}

export default createRoutes;
