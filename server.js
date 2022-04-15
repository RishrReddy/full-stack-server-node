// const express = require('express');
import express from 'express';
import cors from 'cors';
import helloController from "./controllers/hello-controller.js";
import userController from "./controllers/users-controller.js";
import tuitsController from "./controllers/tuits-controller.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://localhost:27017/webdev'
mongoose.connect(CONNECTION_STRING);
const app = express();
app.use(cors());
helloController(app);
app.use(express.json());
userController(app);
tuitsController(app);
app.listen( process.env.PORT ||4000);

//"mongodb+srv://tuiterDB:tuits123@cluster0.wyixq.mongodb.net/web-dev?retryWrites=true&w=majority"