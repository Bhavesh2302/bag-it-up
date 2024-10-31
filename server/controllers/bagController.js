const { Router } = require("express");
const { Bag } = require("../models/bagModel");
const bagController = Router();

bagController.get("/get", async (req, res) => {
  const { brand, category, size, color, sort, skip,limit} = req.query;
  console.log(req.query, "query")
  console.log(sort, "sort")
  let aggregatePipeline = [];
  let matchingCondition = [];

  try {
    if (brand) matchingCondition.push({ brand: { $in: brand } });
    if (category) matchingCondition.push({ category: { $in: category } });
    if (size) matchingCondition.push({ size: { $in: size } });
    if (color) matchingCondition.push({ color: { $in: color } });

    if (matchingCondition.length > 0) {
      aggregatePipeline.push({ $match: { $and: matchingCondition } });
    }

    if (sort) {
      aggregatePipeline.push({ $sort: { discounted_price: Number(sort) } });
    }

    if (aggregatePipeline.length > 0) {
      const bagData = await Bag.aggregate(aggregatePipeline)
        .skip(Number(skip) || 0)
        .limit(limit || 12);
      res.send({ msg: "Bag data successfully loaded", bagData: bagData });
    } else {
      const query = Bag.find().skip(Number(skip) || 0).limit(limit || 12);
      if (sort) query.sort({ discounted_price: Number(sort) });
      bagData = await query;
      res.send({ msg: "Bag data successfully loaded", bagData: bagData });
    }
    }
   catch (err) {
    res.send(500).send({ msg: "Something went wrong!" });
  }
});

module.exports = {
  bagController,
};
