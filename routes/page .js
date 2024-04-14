const { Router } = require("express");
const { 
  handleGetContactPage,
  handleGetAboutPage,

} = require("../controllers/page");

const router = Router();




;

router.get("/contact", handleGetContactPage);

router.get("/about", handleGetAboutPage);


module.exports = router;