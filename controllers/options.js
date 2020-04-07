const router = require("express").Router();
const options = require("../models/options.js");

router.get("/", (req, res) => {
  options
    .find({})
    .then((dat) => {
      res.send(dat);
    })
    .catch(() => res.send([]));
});
router.post("/", (req, res) => {
  options
    .create(req.body)
    .then((dat) => {
      res.send(dat);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
