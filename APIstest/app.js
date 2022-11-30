require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const Port = 5500
const mongoose = require("mongoose")
const mongostring = process.env.url
mongoose.connect(mongostring);
const database = mongoose.connection
database.on("error", (error) => {
    console.log(error)
})
database.once("connected", () => {
    console.log("database is connected")
})


app.use(cors())
app.use(express.json())


const routes = require("./routes/routes");


app.use("/api", routes)



app.listen(Port, () => {
    console.log("server starts at port", Port)
})