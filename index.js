const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const port = 5500
require("./dbConfig")

const bugsController = require("./routes/bugsController")
const featuresController = require("./routes/featuresController")
const projectsController = require("./routes/projectsController")

app.use(bodyParser.json())

app.use("/bugs", bugsController)
app.use("/features", featuresController)
app.use("/projects", projectsController)

// on ouvre l'accès a tout le monde
app.use(cors())

app.listen(port, () => console.log(`server started at ${port}`))