const express = require("express");
const router = express.Router();
const { review } = require("./services/openai");

const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello World. Server is running at port ${port}`);
});

app.listen(port || 8000, () => console.log("Server running"));
