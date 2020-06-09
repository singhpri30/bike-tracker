const router = require("express").Router();
const path = require("path");

//HTML routes for displaying home page

router.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "..", "public", "index.html"));

})
module.exports = router;