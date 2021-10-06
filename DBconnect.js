const mongoose=require("mongoose");

const DBconnect =async()=>{
try{
    await mongoose.connect('mongodb://localhost:27017/myapp');
}catch (error) {
    console.error(`cannot connect to data base ${error}`);
}
};

module.exports=DBconnect;