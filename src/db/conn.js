const mongoose  = require("mongoose");

mongoose.connect("mongodb+srv://asim:admin@test.bssnegc.mongodb.net/test?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log("connection sucessfuly....");
}).catch((e)=>{
    console.log("Not Connected");
    console.log(e);
});