// Lida com as requisições para o banco de dados
import { validationResult } from "express-validator";
import churchService from "../services/churchService.mjs";

const churchController = {
  createChurch: async (req, res) => {
    // Verifica os erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      console.log("church");
      const church = await churchService.createChurch(req.body);
      if (church.length == 1) {
        res.status(200).json(church);
      } else {
        res.status(200).json({ inserted: church.length });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  listChurch: async (req, res) => {
    try {
      const churchs = await churchService.listChurch();
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  findChurch: async (req, res) => {
    try {
      const churchs = await churchService.findChurch(req.params.id);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  findChurchPartition: async (req, res) => {
    try {
      const churchs = await churchService.findChurchPartition(req.params.name);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  deleteChurch: async (req, res) => {
    try {
      const churchs = await churchService.deleteChurch(req.params.id);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  updateChurch: async (req, res) => {
    // Verifica os erros de validação
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const churchs = await churchService.updateChurch(req.params.id, req.body);
      res.status(200).json(churchs);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

export default churchController;
