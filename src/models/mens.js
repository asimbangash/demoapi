const express = require("express");
const mongoose = require("mongoose");

const mensSchema = new mongoose.Schema({
    ranking : {
        type : Number,
        required : true,
        unique: true
    },
    name:{
        type: String,
        required: true,
        unique : true,
        trime: true
    },
    dob:{
        type: Date,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    score: {
        type: Number,
        required: true
    },
    event: {
        type: String,
        default: "100m"
    }
});

const MenRanking = new mongoose.model("MenRanking", mensSchema);

module.exports = MenRanking;