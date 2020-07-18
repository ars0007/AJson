const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const jsonSchema = require("./src/models/model");
const routes = require("./src/controllers/index");
const { connect } = require("./database");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/json", routes);

app.get("/", (req, res) => {
  return res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(PORT, () => {
  connect(mongoose)
    .then(() => console.log("app is listening on port 3000"))
    .catch((err) => console.log(`Error: ${err}`));
});
