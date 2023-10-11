import jwt from "jsonwebtoken";
import GenericController from "#controllers/genericController.mjs";
import User from "#models/user.mjs";
import bcrypt from "bcrypt";

class AuthController extends GenericController {
  constructor() {
    super(User, "");
  }

  // Atenticaçao de login
  async login(req, res) {
    try {
      const { email, password } = req.body;

      //Validando usuário
      const user = await User.findOne({ email: email });
      if (!user) {
        return res.status(401).json({ message: "Usuário não encontrado." });
      }

      //Validando email e password
      const validPassword = bcrypt.compareSync(password, user.password);
      if (user.email === email && validPassword === true) {
        const id = user.id;
        const token = jwt.sign({ id }, process.env.SECRET, {
          expiresIn: 300, // expires in 5min
        });
        //retornando o token
        return res.status(200).json({ auth: true, token: token });
      }

      return res.status(200).json({ auth: true, token: "" });
    } catch (error) {
      res.status(500).json({ message: "Erro de autenticação." });
    }
  }
}

export default AuthController;
