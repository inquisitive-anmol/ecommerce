const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const ejsMate = require("ejs-mate");

const userRoute = require("./routes/user");

const app = express();
const PORT = 8000;

// mongodb connection

main()
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/cart");
}

// middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.engine("ejs", ejsMate);

// apis
app.get("/", (req, res) => {
  return res.render("home.ejs");
});
app.get("/show", (req, res) => {
  return res.render("show.ejs");
});

app.use("/user", userRoute);

app.listen(PORT, () => console.log(`server started at port ${PORT}`));
