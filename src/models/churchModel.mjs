import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const churchSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
    require: true,
  },
  district: {
    type: String,
    require: true,
  },
  city: {
    type: String,
    require: true,
  },
  state: {
    type: String,
    require: true,
  },
  country: {
    type: String,
    require: true,
  },
  zipecode: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    enum: ["paroquia", "igreja"],
    required: true,
  },
  _idtype: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "church", // Corrija o nome da referência para "church" em vez de "churche"
  },
});

churchSchema.plugin(uniqueValidator, {
  message: "O valor '{VALUE}' para o campo '{PATH}' já está no banco de dados.",
});

churchSchema.virtual("parishName", {
  ref: "church", // Referencie o mesmo modelo "church"
  localField: "_idtype",
  foreignField: "_id", // Campo na paróquia onde o _id da igreja é armazenado
  justOne: true, // Você está buscando apenas uma paróquia
});

const churchModel = mongoose.model("church", churchSchema);

export default churchModel;
