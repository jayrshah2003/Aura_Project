const express =  require("express")
const server = express();
const {request, response} = require("http")
const cors = require("cors")
const mongoose = require("mongoose");
const AURA = require("./models/aura")
const User = require("./models/user")
const port = 3000;
const bcrypt = require("bcrypt")
const db_uri = "mongodb+srv://jayrshah255:jayrshah255@cluster0.dclrmna.mongodb.net/AURA?retryWrites=true&w=majority&appName=Cluster0"


server.use(express.urlencoded({extended:false}))
server.use(express.json())
server.use(cors())
//hi

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

server.post("/register", async(request,response) => {
    const {username,password} = request.body
    const postUser = new User({
        username,
    })
    postUser.password = postUser.generateHash(password)
    const saveUser = await postUser.save()
    saveUser ? response.send("User is created") : response.send("Failed!!!")
})

server.post("/login", async (request,response) => {
    const {username, password} = request.body
    await User.findOne({username}).then((user) => {
        if(user){
            bcrypt.compare(password, user.password, (err, res) => {
                if(err){
                    response.send(err)
                }
                if(res){
                    response.send("You are loged in!!!")
                }
                else{
                    response.send("Bad authentication")
                }
            })
        }
        else{
            response.send("Username does not exist")
        }

    })
})

server.get("/aura", async(request,response) => {
    const aura = await AURA.find()
    response.send(aura);
})