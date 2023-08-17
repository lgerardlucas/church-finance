const momngoose = require("mongoose");

const churchSchema = new momngoose.Schema({
  name: {
    type: String,
    require: true,
  },
  address: {
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
});

const churchModel = momngoose.model("church", churchSchema);

module.exports = churchModel;
