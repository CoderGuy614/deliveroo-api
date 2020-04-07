//Get models here.
//Categories
//products
const categories = require("../models/categories");
const products = require("../models/products");
const options = require("../models/options");
const router = require("express").Router();

const getAveragePrice = (options) => {
  let sumPrice = 0;
  let counter = 0;
  options.productOptions.forEach((el) => {
    el.items.forEach((el2) => {
      sumPrice += el2.price;
      counter++;
    });
  });
  return sumPrice / counter;
};

router.get("/", (req, res) => {
  //get the array of objects for the products
  //send it to the main page
  products
    .find({})
    .populate("options categories")
    .lean()
    .then((data) => {
      data.forEach((product) => {
        product.avg = getAveragePrice(product.options);
      });
      res.send(data);
    });
});

router.get("/:id", (req, res) => {
  products
    .findById(req.params.id)
    .populate("options categories")
    .lean()
    .then((dat) => res.send(dat));
});

router.post("/", (req, res) => {
  //read data from the body of the request and post it here.
  products.create(req.body).then((dat) => res.send(dat));
});

router.patch("/:id", (req, res) => {
  products
    .findByIdAndUpdate(req.params.id, req.body)
    .then((dat) => res.send(dat))
    .catch((err) => res.send(err));
});

router.delete("/:id", (req, res) => {
  products
    .delete(req.params.id)
    .then((dat) => res.send(dat))
    .catch((err) => res.send(err));
});

module.exports = router;
