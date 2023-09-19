const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")


const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());



app.listen(5000, console.log("server started running..."))



