const express = require("express");
const mongoose= require("mongoose")
const router=require("./routes/route")
const app = express();

const port = 5000

const url = "mongodb+srv://codequeen:1234@cluster0.b8pxdcp.mongodb.net/codequeen"

app.use(express.json())
app.use('/', router)

mongoose.connect(url).then(() => {
    app.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
}).catch(error => { console.log("error dectected : ", error) })







