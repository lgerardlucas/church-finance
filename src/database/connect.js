const mongoose = require("mongoose");

const connectBD = async () => {
  try {
    db = `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_DATABASE}.mongodb.net/${process.env.MONGODB_DATABASE}?retryWrites=true&w=majority`;
    await mongoose.connect(db);
    console.log("Conectado ao banco de dados.");
  } catch (error) {
    console.error("Erro ao conectar ao banco de dados!", error);
  }
};

module.exports = connectBD;
