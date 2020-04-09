const router = require("express").Router();
const menus = require("../models/menus.js");

router.get("/", (req, res) => {
  //Return an array of the categories of restaurant, such as Italian, Veg etc.

  menus
    .find({})
    .then((dat) => {
      res.send(dat);
    })
    .catch(() => res.send([]));
});
router.post("/", (req, res) => {
  //read data from the body of the request and post it here.
  menus
    .create(req.body)
    .then((dat) => {
      res.send(dat);
    })
    .catch((err) => res.send(err));
});

module.exports = router;
