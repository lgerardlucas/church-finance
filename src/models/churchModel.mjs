import mongoose from "mongoose";
import diacritics from "diacritics";

import uniqueValidator from "mongoose-unique-validator";

const churchSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
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
});

churchSchema.pre("save", function (next) {
  // Normalizando um campo para pesquisa
  this.slugFields = diacritics
    .remove(
      this.name +
        this.address +
        this.city +
        this.state +
        this.country +
        this.district +
        this.zipecode +
        this.type
    )
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");
  next();
});

churchSchema.plugin(uniqueValidator, {
  // Valida inserção de dados únicos no banco de dados.
  message: "O valor '{VALUE}' para o campo '{PATH}' já está no banco de dados.",
});

churchSchema.virtual("_paroquia", {
  // Criar um relacionamento virtual para o campo _paroquia
  ref: "church",
  localField: "_idtype",
  foreignField: "_id",
  justOne: true,
});

const churchModel = mongoose.model("church", churchSchema);

export default churchModel;
