import https from "https";
import fs from "fs";
import express from "express";
import { format } from "date-fns";
import dotenv from "dotenv";
import connectBD from "./src/database/connect.mjs";

dotenv.config(); // Carregar variáveis de ambiente a partir do arquivo .env

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
import { churchRoutes } from "./src/routes/churchRoutes.mjs";
app.use(churchRoutes);

server.listen(port, () => {
  console.log(`Service running on port: ${port}`);
});
