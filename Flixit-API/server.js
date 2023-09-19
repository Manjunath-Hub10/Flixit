const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const userRoutes = require("./routes/UserRoutes")

const app = express();
dotenv.config();

app.use(cors());

app.use(express.json())

const PORT = process.env.PORT;

const DB_CONNECTION_STRING = process.env.Flixitdb;
// const DB = process.env.DB;

mongoose
  .connect(DB_CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connected Successfully !");
  });

app.use("/api/user", userRoutes);


app.listen(5000, console.log(`server started running on ${PORT}...`))



