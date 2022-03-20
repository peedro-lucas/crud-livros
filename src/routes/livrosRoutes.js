import express from "express";
import LivroController from "../controllers/livrosController.js";
import livros from "../models/Livro.js";

const router = express.Router();

router.get("/livros", LivroController.listarLivros)

export default router;