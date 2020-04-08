//Get models here.
//Categories
//products
const categories = require("../models/categories");
const products = require("../models/products");
// const options = require("../models/options");
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
  let average = sumPrice / counter;
  return average;
};

const getMinPrice = (options) => {
  let prices = [];
  options.productOptions.forEach((el) => {
    el.items.forEach((el2) => {
      prices.push(el2.price);
    });
  });
  return prices.sort((a, b) => a - b)[0];
};

router.get("/", (req, res) => {
  //get the array of objects for the products
  //send it to the main page
  products
    .find({})
    .populate("categories")
    .lean()
    .then((data) => {
      data.forEach((product) => {
        product.avg = getAveragePrice(product.options);
        product.minPrice = getMinPrice(product.options);
      });
      res.send(data);
    });
});

router.get("/:id", (req, res) => {
  products
    .findById(req.params.id)
    .populate("categories")
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
