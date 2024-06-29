import mongoose, {mongo} from "mongoose"

async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONNETCTIO_STRING)

    return mongoose.connection
}

export default conectaNaDataBase