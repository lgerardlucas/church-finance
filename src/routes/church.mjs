import Model from "#models/church.mjs";
import ChurchController from "#controllers/church.mjs";
import createRoutes from "#routes/genericRoutes.mjs";

const churchController = new ChurchController(Model);
const churchRoutes = createRoutes(churchController);

export { churchRoutes };
