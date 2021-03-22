const router = require("express").Router();
const db = require("../../models");
const repliesController = require("../../controllers/repliesController");

router.route("/:id")
    .get(repliesController.findById)
    .delete(repliesController.remove)

router.get("/post/:id", (req, res) => {
    db.Reply.find({ 'refId': req.params.id}).sort({ date: -1 })
        .then(results => res.json(results))
})


router.post("/", (req, res) => {
    db.Reply.create({
        username: req.body.username,
        content: req.body.content,
        images: req.body.images,
        refId: req.body.refId
    })
    res.json("Reply created")
})
module.exports = router;