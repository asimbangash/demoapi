const express = require("express");
const router = express.Router();
const MenRanking = require("../models/mens");

router.post("/mens", async(req, res)=>{
    try {
        const addingMens = new MenRanking(req.body);
        const insertMens = await addingMens.save();
        res.status(201).send(insertMens);
    } catch (error) {
        res.status(400).send(error);
    }
})

router.get("/mens", async(req, res)=>{
   try {
    const readMens = await MenRanking.find().sort({"ranking" : 1}); 
    res.send(readMens);
   } catch (error) {
    res.status(400).send(error);
   }
})

router.get("/mens/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const readMen = await MenRanking.findById(_id);
        res.send(readMen);
    } catch (error) {
        res.send(error);
    }
})

router.patch("/mens/:id", async(req, res)=>{
    try {
        const _id = req.params.id;
        const patchMen = await MenRanking.findByIdAndUpdate(_id, req.body,{
            new : true
        });
        
        res.send(patchMen);
    } catch (error) {
        res.send(error);
    }
})

router.delete("/mens/:id", async(req, res)=>{
    try {
        const deleteMen = await MenRanking.findByIdAndDelete(req.params.id);
    res.send(deleteMen);
    } catch (error) {
        res.send(error);
    }
})

module.exports = router;