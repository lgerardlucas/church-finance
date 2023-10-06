import Model from "#models/user.mjs";
import AuthController from "#controllers/auth.mjs";
import createRoutes from "#routes/genericRoutes.mjs";

const authController = new AuthController(Model);
const authRoutes = createRoutes(authController);

export { authRoutes };
