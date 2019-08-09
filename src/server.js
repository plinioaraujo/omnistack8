const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require("./routes");

const server = express();


// server.get('/',(req,res) => {
    
//     return res.send('Hello World');
// })

//const connectionDb ='mongodb+srv://plinioaraujo:plinioaraujo@cluster0-mmxvm.mongodb.net/devs8?retryWrites=true&w=majority'; 

const connectionDb ='mongodb+srv://plinioaraujo:plinioaraujo@cluster0-mmxvm.mongodb.net/omnistack8?retryWrites=true&w=majority';
mongoose.connect(connectionDb,{useNewUrlParser: true});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);