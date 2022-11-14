const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 5500
require("./dbConfig")

const bugsController = require("./routes/bugsController")

app.use(bodyParser.json())

app.use("/bugs", bugsController)

// on ouvre l'accès a tout le monde
app.use(cors())

app.listen(port, () => console.log(`server started at ${port}`))