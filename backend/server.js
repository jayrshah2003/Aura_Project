const express =  require("express")
const server = express();
const {request, response} = require("http")
const cors = require("cors")
const mongoose = require("mongoose");
const AURA = require("./models/aura")
const port = 3000;
const db_uri = "mongodb+srv://jayrshah255:jayrshah255@cluster0.dclrmna.mongodb.net/AURA?retryWrites=true&w=majority&appName=Cluster0"

server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(cors())


mongoose.connect(db_uri).then((result) => {
    server.listen(port, () => {
        console.log(`Listening on ${port}...\nConnected to DB`) 
        })      
})  .catch((error) => {
    console.log(error)
})

server.get("/",(request,response) => {
    response.send("LIVE!!!")
})

server.get("/aura", async(request,response) => {
    const aura = await AURA.find()
    response.send(aura);
})