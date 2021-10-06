const express=require('express');

const app=express();

const port =5000;
const DBconnect=require("./DBconnect");
DBconnect();
app.use(express.json());
app.use("/user",require("./routes/user"));

app.listen(port,(error)=>{
    error?console.log(error) :console.log("the server is runnig")
}
);