const { Router } = require("express");
const { 
    handleGetListShoes,
    handlePostListShoes,
 } = require("../controllers/admin");

const router = Router();


router.get("/list", handleGetListShoes);


router.post("/list", handlePostListShoes);

















module.exports = router;