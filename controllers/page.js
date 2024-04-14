

function handleGetContactPage(req, res) {

    return res.render("contact");
}

function handleGetAboutPage(req, res) {
    return res.render("about");
}

module.exports = {
    handleGetContactPage,
    handleGetAboutPage,
}