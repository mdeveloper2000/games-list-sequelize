const express = require("express")
const path = require("path")
const { router } = require("./routes/gameRoutes")
require("dotenv").config()

const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.static("public"))
app.use("/css", express.static(path.join(__dirname, "node_modules/bootstrap/dist/css")))
app.use("/font", express.static(path.join(__dirname, "node_modules/bootstrap-icons/font")))
app.use(router)

app.listen(process.env.PORT, () => {
    console.log(`Server running on: http://localhost:${process.env.PORT}`)
})