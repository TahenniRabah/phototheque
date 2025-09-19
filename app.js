const express = require("express");
const app = express();
const fileupload = require("express-fileupload");
const path = require("path");
const mongoose = require("mongoose");
const flash = require("connect-flash");
const session = require("express-session");
const albumRoutes = require("./routes/album.routes");

mongoose.connect("mongodb://localhost:27017/phototheque");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(fileupload());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("public"));

app.set("trust proxy", 1);
app.use(
  session({
    secret: "amciciw",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(flash());

app.get("/", (req, res) => {
  res.redirect("/albums");
});
app.use("/", albumRoutes);

app.use((req, res) => {
  res.status(404).send("page non trouvée!");
});
module.exports = app;
