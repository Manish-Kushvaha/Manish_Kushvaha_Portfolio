const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");
const path = require("path");
// const data = require("./views/data/index.ejs")

// const MONGO_URL = "mongodb://127.0.0.1:27017/test";

// main()
//     .then(() => {
//         console.log("connected to DB");
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// async function main() {
//     await mongoose.connect(MONGO_URL);
// };

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "Images")));

app.get("/", (req, res) => {
    res.render("data/index");
});

app.get("/skills", (req, res) => {
    res.render("data/skills");
});

app.get("/contact", (req, res) => {
    res.render("data/contact");
});

app.get("/education", (req, res) => {
    res.render("data/education.ejs");
});

app.get("/projects", (req, res) => {
    res.render("data/projects");
});

app.listen(port, () => {
    console.log("Ganapati Bappa Morya");
});