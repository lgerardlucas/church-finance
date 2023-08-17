const express = require("express");
const dotenv = require("dotenv");
const connectBD = require("./src/database/connect");
const userChurch = require("./src/models/church");

dotenv.config();

connectBD();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.contentType("text/html");
  res.status(200).send("<h1>Hello Word</h1>");
});

app.get("/churchs", (req, res) => {
  const churchs = [
    {
      name: "Igreja Batista",
      address: "Rua 1",
      city: "São Paulo",
      state: "SP",
      country: "Brasil",
    },
    {
      name: "Igreja São Cristóvão",
      address: "Rua 2",
      city: "Rio de Janeiro",
      state: "RJ",
      country: "Brasil",
    },
  ];

  res.status(200).json(churchs);
});

app.post("/churchs", async (req, res) => {
  try {
    const church = await userChurch.create(req.body);
    res.status(200).json(church);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Sistema executando na porta: ${PORT}`);
});
