const mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://asimbangash:admin@cluster0.43hkj2y.mongodb.net/olympics?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection sucessfuly....");
}).catch((e)=>{
    console.log("Not Connected");
    console.log(e);
});