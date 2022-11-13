const mongoose = require('mongoose')

// const onlineUrl = "mongodb+srv://dalyna64:Dd123123Dd@cluster1.nyf35.mongodb.net/node-api"
const onlineUrl = "mongodb+srv://daly:Dd123123Dd@cluster1.ktvz4ok.mongodb.net/test"

// const localUrl = "mongodb://localhost:27017/node-api"
mongoose.connect(
    onlineUrl,
    {
        useNewUrlParser: true, // l'url doit avoir un prot
        useUnifiedTopology: true, // utilise le dedrnier gestionaire de connection
    },
    (error) => {
        if (!error) console.log("MomgoDb connected ")
        else console.log(`connection error : ${error.message}`)
    }
)