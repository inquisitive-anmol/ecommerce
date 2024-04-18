const Shoe = require("../models/shoes");



function handleGetListShoes(req, res) {
    return res.render("./product/listShoes");
};

async function handlePostListShoes(req, res) {
    let { price, discount } = req.body;
    const uploadedFiles = req.files;
    const imageUrls = uploadedFiles.map(file => `/public/img/products/${file.filename}`); // Create image URLs
    let discountPrice = Math.floor((price - ((discount / 100) * price))) || price;
    let result = await Shoe.create({ ...req.body, discountPrice, images: imageUrls });
    res.redirect("/");
}





module.exports = {
    handleGetListShoes,
    handlePostListShoes,
}