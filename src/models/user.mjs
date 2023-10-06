import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import diacritics from "diacritics";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    require: true,
    // select: false,
  },
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
  slugFields: {
    type: String,
    index: true,
  },
});

UserSchema.pre("save", function (next) {
  const text_normalized = this.firstName + this.lastName + this.email;
  this.slugFields = diacritics
    .remove(text_normalized)
    .toLowerCase()
    .replace(/[^a-zA-Z0-9]/g, "");

  this.password = bcrypt.hashSync(this.password, 10);

  next();
});

UserSchema.plugin(uniqueValidator, {
  // Valida inserção de dados únicos no banco de dados.
  message: "O valor '{VALUE}' para o campo '{PATH}' já está no banco de dados.",
});

const userModel = mongoose.model("user", UserSchema);

export default userModel;
