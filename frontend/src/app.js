const express = require("express");
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static("src/views"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/form.html"));
});

app.post("/submit", async (req, res) => {
  try {
    const response = await axios.post("http://backend:5000/process", req.body);
    res.send(`<h2>Backend Response:</h2><p>${response.data.message}</p>`);
  } catch (error) {
    res.send("Error connecting to Flask backend");
  }
});

app.listen(3000, () => {
  console.log("Frontend running on port 3000");
});
