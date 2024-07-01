import experss from "express"
import livros from "./livrosRoutes.js"
import autores from "./autoresRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"))

    app.use(experss.json(), livros)
    app.use(experss.json(), autores)
}

export default routes