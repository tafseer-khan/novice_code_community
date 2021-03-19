const router = require("express").Router();
const db = require("../../models");

router.post("/replies", (req,res) => {
    db.Reply.create({
        username: req.body.username,
        content: req.body.content,
        images: req.body.images,
        refId: req.body.refId
    })
})
module.exports = router;