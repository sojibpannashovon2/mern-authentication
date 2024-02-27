require(`dotenv`).config();
//To helps you set up server
const express = require("express");

//making easy for create schema and conection to mongodb
const mongoose = require("mongoose");
//password hashing
const bycript = require("bcrypt");
//hepls to data to json
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

//helps to error free between database and api creation
const cors = require("cors");
const { CURSOR_FLAGS } = require("mongodb");

//conect to express

const app = express();

//conect to mongodb

const url = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.yaanftr.mongodb.net/mernDB?retryWrites=true&w=majority&appName=Cluster0`;

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3000, () => {
      console.log(`Server is listening at 3000`);
    });
  })
  .catch((error) => {
    console.log(`Server is listening at 3000`);
  });

//middleware
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

//conect to schema

//conect to api or routes

//database connection

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
