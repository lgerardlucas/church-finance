import Model from "#models/user.mjs";
import UserController from "#controllers/user.mjs";
import createRoutes from "#routes/genericRoutes.mjs";

const userController = new UserController(Model);
const userRoutes = createRoutes(userController);

export { userRoutes };
