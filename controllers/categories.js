const router = require("express").Router();
const categories = require("../models/categories");

router.get("/", (req, res) => {
  //Return an array of the categories of restaurant, such as Italian, Veg etc.

  categories
    .find({})
    .then(dat => {
      res.send(dat);
    })
    .catch(() => res.send([]));
});
router.post("/", (req, res) => {
  //read data from the body of the request and post it here.
  categories
    .create(req.body)
    .then(dat => {
      res.send(dat);
    })
    .catch(err => res.send(err));
});
module.exports = router;
