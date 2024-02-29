require(`dotenv`).config();
//To helps you set up server
const express = require("express");

//making easy for create schema and conection to mongodb
const mongoose = require("mongoose");
//password hashing
const bycript = require("bcrypt");
//hepls to data to json
const bodyParser = require("body-parser");

const User = require("./models/userSchema");

const jwt = require("jsonwebtoken");

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
    app.listen(3001, () => {
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

//user registration
//post register

app.post("/register", async (req, res) => {
  try {
    const { email, userName, password } = req.body;
    const hashedPassword = await bycript.hash(password, 10);
    const newUser = new User({ email, userName, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User created Successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error signing up" });
  }
});

//Get register user

app.get("/register", async (req, res) => {
  try {
    const user = await User.find();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: "Unable to find the user" });
  }
});

//Post Login

app.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = await User.findOne({ userName });

    if (!user) {
      return res.status(401).json({ error: "Invaild credenttials" });
    }
    const isPasswordVaild = await bycript.compare(password, user.password);
    if (!isPasswordVaild) {
      return res.status(401).json({ error: "Invaild credenttials" });
    }
    const token = jwt.sign({ userId: user._id }, process.env.JWT_TOKEN, {
      expiresIn: "1hr",
    });
    res.json({ message: "Login Successfull" });
  } catch (error) {
    res.status(500).json({ error: "Error Login" });
  }
});
