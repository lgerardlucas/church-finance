import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import diacritics from "diacritics";

const ChurchSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
    unique: true,
  },
  address: {
    type: String,
  },
  district: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  zipecode: {
    type: String,
  },
  type: {
    type: String,
    enum: ["paroquia", "igreja"],
  },
  _idtype: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "church",
  },
  slugFields: {
    type: String,
    index: true,
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

ChurchSchema.pre("save", function (next) {
  // Normalizando um campo para pesquisa
  const text_normalized =
    this.name +
    this.address +
    this.city +
    this.state +
    this.country +
    this.district +
    this.zipecode +
    this.type;

  this.slugFields = diacritics
    .remove(text_normalized)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");

  next();
});

ChurchSchema.plugin(uniqueValidator, {
  // Valida inserção de dados únicos no banco de dados.
  message: "O valor '{VALUE}' para o campo '{PATH}' já está no banco de dados.",
});

ChurchSchema.virtual("_paroquia", {
  // Criar um relacionamento virtual para o campo _paroquia
  ref: "church",
  localField: "_idtype",
  foreignField: "_id",
  justOne: true,
});

const churchModel = mongoose.model("church", ChurchSchema);

export default churchModel;
