// Lida com as requisições para o banco de dados
import { validationResult } from "express-validator";
import churchService from "#services/churchService.mjs";

const churchController = {
  create: async (req, res) => {
    // Verifica os erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("church");
      const church = await churchService.create(req.body);
      if (church.length == 1) {
        res.status(200).json(church);
      } else {
        res.status(200).json({ inserted: church.length });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  list: async (req, res) => {
    try {
      const churchs = await churchService.list();
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  find: async (req, res) => {
    try {
      const churchs = await churchService.find(req.params.id);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  findPartition: async (req, res) => {
    try {
      const churchs = await churchService.findPartition(req.params.name);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  delete: async (req, res) => {
    try {
      const churchs = await churchService.delete(req.params.id);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  update: async (req, res) => {
    // Verifica os erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const churchs = await churchService.update(req.params.id, req.body);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default churchController;
