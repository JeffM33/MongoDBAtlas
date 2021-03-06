const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// const routes = require('./routes/api');

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.mongoURL || "mongodb://localhost/workout", { useNewUrlParser: true });

app.use(require("./routes/api"));
app.use(require("./routes/html"));

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
