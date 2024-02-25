require(`dotenv`).config();
const express = require("express");
const cors = require("cors");
const app = express();

const conncetion = require(`./db`);

//database connection
conncetion();
//middleware
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// Define a route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
