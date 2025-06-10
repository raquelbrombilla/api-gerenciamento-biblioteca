import * as express from "express";
import { atualizarLivro, criarLivro, deletarLivro, listarLivros } from "../controllers/livroController";

const router = express.Router();
router.get("/livros", listarLivros);
router.post("/livros", criarLivro);
router.put("/livros/:id", atualizarLivro);
router.delete("/livros/:id", deletarLivro);

export default router;