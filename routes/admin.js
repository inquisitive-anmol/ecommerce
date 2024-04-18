const { Router } = require("express");
const upload = require("../middlewares/uploadImg");
const { 
    handleGetListShoes,
    handlePostListShoes,
 } = require("../controllers/admin");

const router = Router();


router.get("/list", handleGetListShoes);


router.post("/list", upload, handlePostListShoes);

















module.exports = router;