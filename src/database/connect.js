const mongoose = require("mongoose");

const connectBD = async () => {
  try {
    DATABASE =
      "nodejschurchfinance.xo6an7u.mongodb.net/?retryWrites=true&w=majority";
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${DATABASE}`
    );
    console.log("Conectado ao banco de dados.");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados!", error);
  }
};

module.exports = connectBD;
