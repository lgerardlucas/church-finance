import GenericService from "#services/genericService.mjs";

class GenericController {
  constructor(Model, populate_field = "") {
    this.service = new GenericService(Model, populate_field);
  }

  async login(req, res) {
    return await undefined;
  }

  async create(req, res) {
    try {
      const data = req.body;
      const result = await this.service.create(data);
      res.status(201).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async list(req, res) {
    try {
      const docs = await this.service.list();
      res.status(200).json(docs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async find(req, res) {
    try {
      const id = req.params.id;
      const doc = await this.service.findById(id);
      if (!doc) {
        res.status(404).json({ message: "Documento não encontrado" });
      } else {
        res.status(200).json(doc);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async findPartition(req, res) {
    try {
      const value = req.params.name;
      const result = await this.service.findPartition(value);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const data = req.body;
      const doc = await this.service.update(id, data);
      if (!doc) {
        res.status(404).json({ message: "Documento não encontrado" });
      } else {
        res.status(200).json(doc);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id;
      const doc = await this.service.delete(id);
      if (!doc) {
        res.status(404).json({ message: "Documento não encontrado" });
      } else {
        res.status(200).json(doc);
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

export default GenericController;
