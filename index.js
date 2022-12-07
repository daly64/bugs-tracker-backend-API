const express = require('express')
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")

const port = process.env.PORT || 5500
require("./dbConfig")

const bugsController = require("./routes/bugsController")
const featuresController = require("./routes/featuresController")
const projectsController = require("./routes/projectsController")


app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.send(`
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bugs Tracker REST API</title>
</head>
<body>

<h1>Bugs Tracker REST API</h1>
<h2><a href="/bugs"> /bugs </a></h2>
<h2><a href="/features"> /features </a></h2>
<h2><a href="/projects"> /projects </a></h2>
</body>
</html>    
    `)
})

app.use("/bugs", bugsController)
app.use("/features", featuresController)
app.use("/projects", projectsController)

// on ouvre l'accès a tout le monde
app.use(cors())

let serverStatus = ''

// app.listen(port, () => console.log(`server started at ${port}`))
app.listen(port, () => {
    serverStatus = `connected port ${port}`
    console.log(`server started at ${port}`)
})



