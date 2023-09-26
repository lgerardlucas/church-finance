import GenericService from "#services/genericService.mjs";

class GenericController {
  constructor(Model) {
    this.service = new GenericService(Model);
  }

  async create(req, res) {
    try {
      const data = req.body;
      console.log(data);
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
      const churchs = await this.service.findPartition(req.params.name);
      res.status(200).json(churchs);
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
