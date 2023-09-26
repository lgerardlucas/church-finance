import diacritics from "diacritics";

class GenericService {
  constructor(Model) {
    this.Model = Model;
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
      return await this.Model.find();
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      return await this.Model.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async findPartition(value) {
    try {
      const textSearch = new RegExp(diacritics.remove(value), "i");

      return await this.Model.find({
        slugFields: { $regex: textSearch },
      });
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
