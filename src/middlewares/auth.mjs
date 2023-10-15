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

export { login };

// // authMiddleware.js
// import jwt from "jsonwebtoken";

// function verifyJWT(req, res, next) {
//   const token = req.headers["authorization"];
//   if (!token)
//     return res.status(401).json({ auth: false, message: "No token provided." });

//   jwt.verify(token, process.env.SECRET, function (err, decoded) {
//     if (err)
//       return res
//         .status(500)
//         .json({ auth: false, message: "Failed to authenticate token." });

//     // se tudo estiver ok, salva no request para uso posterior
//     req.userId = decoded.id;
//     next();
//   });
// }

// module.exports = verifyJWT;
