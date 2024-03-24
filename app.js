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
app.use(express.json())

const user = require("./routers/user.route");
const userProduct =require("./routers/user.products.routes")
app.use('/api/users',user)
app.use('/api/users-products',userProduct)

//Running the server
app.listen(port, ()=>{
    console.log("The server is running and listening at port" + port)

})
