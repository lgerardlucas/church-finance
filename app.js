const https = require("https");
const fs = require("fs");
const express = require("express");
const dotenv = require("dotenv");
const connectBD = require("./src/database/connect");

// Read .env
dotenv.config();

// Connect to database
connectBD();

// Express
const app = express();

// Certificate
const options = {
  key: fs.readFileSync("./src/cert/chave-privada.key"),
  cert: fs.readFileSync("./src/cert/certificado-autoassinado.crt"),
};
const server = https.createServer(options, app);

// Output JSON
app.use(express.json());

// Requests
app.get("/", (req, res) => {
  res.contentType("text/html");
  res.status(200).json({ message: "Hello World" });
});

// Routes
const churchRoutes = require("./src/routes/churchRoutes");
app.use(churchRoutes);

// Port
const PORT = process.env.PORT || 3000;

// Start Server
server.listen(PORT, () => {
  console.log(`Sistema executando na porta: ${PORT}`);
});
