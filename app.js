const express = require("express");
const dotenv = require("dotenv");
const connectBD = require("./src/database/connect");

dotenv.config();

module.exports = connectBD();

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.contentType("text/html");
//   res.status(200).send("<h1>Hello World</h1>");
// });

const churchRoutes = require("./src/routes/churchRoutes");
app.use("/churchs", churchRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sistema executando na porta: ${PORT}`);
});
