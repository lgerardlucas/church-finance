import diacritics from "diacritics";
import mongoose from "mongoose";

class GenericService {
  constructor(Model, populate_field = "") {
    this.Model = Model;
    this.populate_field = populate_field;
  }

  async create(data) {
    try {
      return await this.Model.create(data);
    } catch (error) {
      throw error;
    }
  }

  async list() {
    try {
      return await this.Model.find().populate(this.populate_field).lean();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      return await this.Model.findById(id).populate(this.populate_field).lean();
    } catch (error) {
      throw error;
    }
  }

  async findPartition(value) {
    try {
      const textSearch = new RegExp(diacritics.remove(value), "i");

      return await this.Model.find({
        slugFields: { $regex: textSearch },
      })
        .populate(this.populate_field)
        .lean();
    } catch (err) {
      throw Error(err.message);
    }
  }

  async update(id, data) {
    try {
      return await this.Model.findByIdAndUpdate(id, data, { new: true });
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    try {
      return await this.Model.findByIdAndDelete(id);
    } catch (error) {
      throw error;
    }
  }
}

export default GenericService;
