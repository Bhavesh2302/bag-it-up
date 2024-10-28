const { Router } = require("express");
const { Bag } = require("../models/bagModel");
const bagController = Router();

bagController.get("/get", async (req, res) => {
const bagData = await Bag.find()
  res.send({ msg: "Bag data successfully loaded",bagData: bagData });
});

module.exports = {
  bagController
};