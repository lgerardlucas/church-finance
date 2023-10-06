import express from "express";

function createRoutes(controller) {
  const router = express.Router();

  router
    .post("/", controller.create.bind(controller))
    .post("/login", controller.create.bind(controller));

  router
    .get("/", controller.list.bind(controller))
    .get("/filter/:name", controller.findPartition.bind(controller))
    .get("/:id", controller.find.bind(controller));

  router.delete("/:id", controller.delete.bind(controller));
  router.patch("/:id", controller.update.bind(controller));

  return router;
}

export default createRoutes;
