import fs from "fs";
import dotenv from "dotenv";
import https from "https";
import express from "express";

import format from "date-fns";
import connectBD from "#database/connect.mjs";

// Carregar variáveis de ambiente a partir do arquivo .env
dotenv.config();

// Connect to database
connectBD();

const app = express();
const port = process.env.PORT || 3000;

// Certificate
const options = {
  key: fs.readFileSync("./src/cert/chave-privada.key"),
  cert: fs.readFileSync("./src/cert/certificado-autoassinado.crt"),
};
const server = https.createServer(options, app);

// Output JSON
app.use(express.json());

app.get("/", (req, res) => {
  const currentDate = new Date();
  const formattedDate = format(currentDate, "dd/MM/yyyy HH:mm:ss");
  res.send(`Data atual: ${formattedDate}`);
});

// Routes
import { churchRoutes } from "#routes/church.mjs";
app.use("/church", churchRoutes);

server.listen(port, () => {
  console.log(`Service running on port: ${port}`);
});
