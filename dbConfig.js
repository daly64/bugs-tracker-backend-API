const mongoose = require('mongoose')

const onlineUrl = "mongodb+srv://daly:Dd123123Dd@cluster1.ktvz4ok.mongodb.net/bugsTracker"
// const onlineUrl = "/"
mongoose.connect(
    onlineUrl,
    {
        useNewUrlParser: true, // l'url doit avoir un prot
        useUnifiedTopology: true, // utilise le dernier gestionaire de connection
    },
    (error) => {
        if (!error) console.log("MomgoDb connected ")
        else console.log(`connection error : ${error.message}`)
    }
)


