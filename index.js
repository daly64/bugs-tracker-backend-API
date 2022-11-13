const express =require('express')

const app = express()
const port = 5500
require("./dbConfig")
app.listen(port, () => console.log(`server started at ${port}`))