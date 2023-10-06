import jwt from "jsonwebtoken";
import GenericController from "#controllers/genericController.mjs";

class AuthController extends GenericController {
  constructor(Model) {
    super(Model, "");
  }

  async create(req, res) {
    const result = await this.service.findPartition("lgerardlucas@gmail.com");
    console.log(result);
    if (req.body.user === "luiz" && req.body.password === "123") {
      const id = 1; //esse id viria do banco de dados
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: 300, // expires in 5min
      });
      return res.json({ auth: true, token: token });
    }
    res.status(500).json({ message: "Login inválido!" });

    // app.post("/logout", function (req, res) {
    //   res.json({ auth: false, token: null });
    // });
    // --------------------------------------------------------
  }
}

export default AuthController;
