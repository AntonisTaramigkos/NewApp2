const express = require('express');
const app = express();
const mongoose = require('mongoose')
const port=  3000;

//Connecting server
mongoose.connect(process.env.MONGODB_URI)
.then ( 
    ()=> {console.log("Connection to mongoDB established")},
    err => {console.log("Connection to mongoDB failed",err)}
)

//MiddleWare

const user = require("./routers/user.route");
app.use('/api/users',user)

//Running the server
app.listen(port, ()=>{
    console.log("The server is running and listening at port" + port)

})
