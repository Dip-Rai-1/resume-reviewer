const express = require("express");
const router = express.Router();
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send(`Hello World. Server is running at port ${port}`);
});

app.use("/api", require("./routes/review"));

app.listen(port || 8000, () => console.log("Server running"));
