import express from "express"
import conectaNaDataBase from "./config/dbConect.js"
import routes from "./routes/index.js"

const conexão = await conectaNaDataBase()

conexão.on("error", (erro) => {
    console.error("Erro de conexão", erro)
})

conexão.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express()
routes(app)

export default app