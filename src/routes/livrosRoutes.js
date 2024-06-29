import express from "express"
import LivroController from "../controllers/livroController.js"

const routs = express.Router()

routs.get("/livros", LivroController.listarLivros)

export default routs