const express = require("express");
const mongoose= require("mongoose")
const router=require("./routes/route")
const cors = require("cors")
const bodyParser = require("body-parser")

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())


const port = 5000

const url = "mongodb+srv://codequeen:123@cluster0.b8pxdcp.mongodb.net/codequeen"

app.get("/", (req, res) => {
    res.status(200).sendFile(__dirname + "./form.html")
})

app.use(express.json())
app.use('/', router)

app.use(express.static("frontEnd"))

mongoose.connect(url).then(() => {
    app.listen(port, () => {
        console.log(`server running on port ${port}`)
    })
}).catch(error => { console.log("error dectected : ", error) })







