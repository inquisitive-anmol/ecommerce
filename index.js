const express = require("express");
const path = require("path");

const cookiePaser = require("cookie-parser");


const { connectMongoDb }= require("./connection");
const userRoute = require("./routes/user");
const pageRoute = require("./routes/page ");

const app = express();
const PORT = 8000;


const {
  checkForAuthenticationCookie,
} = require("./middlewares/authentication");


// mongodb connection
connectMongoDb("mongodb://127.0.0.1:27017/cart");


// middlewares
app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.urlencoded({ extended: true }));
app.use(cookiePaser());
app.use(checkForAuthenticationCookie("token"));






// http requests endpoints
app.get("/",(req, res) => {
  return res.render("home.ejs", {
      user: req.user,
  });
}
);

app.use("/page", pageRoute);

app.use("/user", userRoute);



app.listen(PORT, () => console.log(`server started at port ${PORT}`));
