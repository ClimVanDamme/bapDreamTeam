const Drink = require("../models/drink.model.js");

exports.create = (req, res) => {
  if (!req.body.name) {
    return res.status(500).send({ err: "name can not be empty" });
  }

  const drink = new Drink({
    name: req.body.name,
    price: req.body.price
  });

  drink
    .save()
    .then(drink => res.send(drink))
    .catch(err => {
      res.status(500).send({ error: err.drink || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const drinks = await Drink.find();
    res.send(drinks);
  } catch (err) {
    res.status(500).send({ err: err.drink || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const drink = await Drink.findOne({
      _id: req.params.drinkId
    });
    if (drink) {
      res.send(drink);
    } else {
      res.status(404).send("No drink found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.name) {
    return res.status(400).send("name mag niet leeg zijn");
  }

  try {
    const drink = await Drink.findOneAndUpdate(
      {
        _id: req.params.drinkId
      },
      {
        name: req.body.name,
        price: req.body.price
      },
      {
        new: true
      }
    );

    if (!drink) {
      return res.status(404).send("No drink found");
    }
    res.send(drink);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const drink = await Drink.findOneAndRemove({
      _id: req.params.drinkId
    });
    if (!drink) {
      return res.status(404).send("No drink found");
    }
    res.send(drink);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
