const express = require("express");
const cors = require("cors");
const router = require("./routers/men");
require("./db/conn");
const MenRanking  = require("./models/mens");
const app = express();

app.use(cors());
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`server is running in port no ${port}`);
});