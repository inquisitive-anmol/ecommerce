const Shoe = require("../models/shoes");


function handleGetListShoes (req, res) {
    return res.render("./product/listShoes");
};

async function handlePostListShoes (req, res) {
    let result = await Shoe.create({...req.body, discountPrice: 3455});
res.redirect("/");
}





module.exports = {
    handleGetListShoes,
    handlePostListShoes,
}