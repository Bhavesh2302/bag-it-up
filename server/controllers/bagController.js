const { Router } = require("express");
const { Bag } = require("../models/bagModel");
const bagController = Router();

bagController.get("/get", async (req, res) => {
const bagData = await Bag.find()
  res.send({ bagData: bagData });
});



module.exports = {
  bagController
};