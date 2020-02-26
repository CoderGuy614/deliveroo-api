//Get models here.
//Categories
//Restaurants
const categories = require("../models/categories");
const restaurants = require("../models/restaurants");
const menus = require("../models/menus");

const router = require("express").Router();

const getAveragePrice = menu => {
  console.log(menu);
  let sumPrice = 0;
  let counter = 0;
  menu.menuCategories.forEach(el => {
    el.items.forEach(el2 => {
      sumPrice += el2.price;
      counter++;
    });
  });
  return sumPrice / counter;
};

router.get("/", (req, res) => {
  //get the array of objects for the restaurants
  //send it to the main page
  restaurants
    .find({})
    .populate("menu categories")
    .lean()
    .then(dat => {
      dat.forEach(el3 => {
        el3.avg = getAveragePrice(el3.menu);
      });
      res.send(dat);
    })
    .catch(e => {
      console.log(e);
      res.send([]);
    });
});

router.get("/:id", (req, res) => {
  //Return only one restuarant of the given id

  restaurants
    .findById(req.params.id)
    .populate("menus categories")
    .lean()
    .then(dat => {
      dat.avg = getAveragePrice(dat.menu);

      res.send(dat);
    })
    .catch(() => res.send([]));
});

router.post("/", (req, res) => {
  //read data from the body of the request and post it here.

  restaurants
    .create(req.body)
    .then(dat => res.send(dat))
    .catch(err => res.send(err));
});

router.patch("/:id", (req, res) => {
  //Update a restaurant of the given id with the data given in the body

  restaurants
    .findByIdAndUpdate(req.params.id, req.body)
    .then(dat => res.send(dat))
    .catch(err => res.send(err));
});

router.delete("/:id", (req, res) => {
  //delete the restaurant with the given id
  restaurants
    .delete(req.params.id)
    .then(dat => res.send(dat))
    .catch(err => res.send(err));
});

module.exports = router;
