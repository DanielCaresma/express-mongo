import experss from "express"
import livros from "./livrosRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Curso de Node.js"))

    app.use(experss.json(), livros)
}

export default routes