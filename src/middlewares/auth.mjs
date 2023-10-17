import jwt from "jsonwebtoken";
import User from "#models/user.mjs";
import bcrypt from "bcrypt";

// Atenticaçao de login
async function login(req, res) {
  try {
    const { email, password } = req.body;

    //Validando usuário
    const user = await User.findOne({ email: email });
    if (!user) {
      return await res
        .status(401)
        .json({ auth: false, token: "", message: "Usuário não encontrado." });
    }
    if (user.isActive === false) {
      return await res.status(401).json({
        auth: false,
        token: "",
        message: "Usuário sem permissão de acesso.",
      });
    }

    //Validando email e password
    const validPassword = bcrypt.compareSync(password, user.password);
    if (user.email === email && validPassword === true) {
      const id = user.id;
      const token = jwt.sign({ id }, process.env.SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });
      return await res
        .status(200)
        .json({ auth: true, token: token, message: "Acesso liberado!" });
    }

    //Acesso negado
    return await res
      .status(200)
      .json({ auth: false, token: "", message: "Login incorreto!" });
  } catch (error) {
    //Erro de autenticação
    return await res
      .status(500)
      .json({ auth: false, token: "", message: "Erro de autenticação." });
  }
}

function verifyJWT(req, res, next) {
  const token = req.headers["authorization"].startsWith("Bearer ")
    ? req.headers["authorization"].slice(7)
    : req.headers["authorization"];

  if (!token)
    return res
      .status(401)
      .json({ auth: false, message: "Nenhum token fornecido." });

  jwt.verify(token, process.env.SECRET, function (err, decoded) {
    if (err)
      return res.status(500).json({ auth: false, message: "Token inválido." });

    req.userId = decoded.id;
    next();
  });
}

export { login, verifyJWT };
