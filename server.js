const express = require("express");
const app = express();
const mongoose = require("mongoose");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const userRoutes = require("./route");

const mongoDBUrl = "mongodb://localhost:27017/mongo-playground"
const connect = () => mongoose.connect(mongoDBUrl, {useNewUrlParser: true});

// MIIDDLEWARES
app.use(cors());
app.use(urlencoded({extended: true}));
app.use(json());
app.use("/users", userRoutes);
// http://localhost:4000/

const start = async () => {
    try {
        await connect();
        app.listen("4000", () => console.log("Listening to port 4000"));
    } catch(e) {
        console.log(e);
    }
}

start();