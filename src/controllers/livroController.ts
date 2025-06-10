import { Request, Response } from "express";
import connection from "../config/db";
import { Livro } from "../models/livro";
import { ResultSetHeader } from "mysql2";

export const listarLivros = (req: Request, res: Response) => {
    connection.query("SELECT * FROM livro", (err, results) => {
        if (err) return res.status(500).json({erro: err.message});
        res.json(results);
    });
};

export const criarLivro = (req: Request, res: Response) => {
    const livro: Livro = req.body;
    connection.query("INSERT into livro SET ?", livro, (err, results) => {
        if (err) return res.status(500).json({ erro: err.message });
        const result = results as ResultSetHeader;
        res.json({ id: result.insertId, ...livro });
    });
};

export const atualizarLivro = (req: Request, res: Response) => {
    const id = req.params.id;
    const livro: Livro = req.body;
    connection.query("UPDATE livro SET ? WHERE id = ?", [livro, id], (err) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json({ id, ...livro });
    });
};

export const deletarLivro = (req: Request, res: Response) => {
    const id = req.params.id;
    connection.query("DELETE FROM livro WHERE id = ?", id, (err) => {
        if (err) return res.status(500).json({ erro: err.message });
        res.json({ mensagem: "Livro deletado com sucesso!" })
    });
};