import express from "express"
import { BookRouter } from "./routes/library_routes.js"
import mongoose from "mongoose"
import "dotenv/config"




const app = express()

const mongouri = process.env.MONGO_URI
mongoose.connect(mongouri)

const PORT = process.env.PORT || 7070;

await mongoose.connect(mongouri)


app.use(express.json())

app.use(BookRouter)


app.listen(PORT, () =>{
    console.log(`Server is up on port ${PORT}`)
})
