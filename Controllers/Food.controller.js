const FoodModel = require("../Models/Food.model");
const FoodRouter = require("express").Router();

/**
 * METHOD = GET
 * PATH = /getAllFood/:restaurantId
 */

FoodRouter.get("/getAllFood/:restaurantId", (req, res, next) => {
  const { restaurantId } = req.params;
  FoodModel.find({
    restaurantId: restaurantId,
  })
    .then((response) => {
      if (response && response.length > 0) {
        // SEND ALL FOOD DATA
        return res.status(200).json({
          message: "Food fetched successfully!!!",
          result: {
            count: response.length,
            data: response,
          },
          success: true,
        });
      } else {
        // SEND NO RETAUURANTS
        return res.status(200).json({
          message: "No food found!!!",
          data: [],
          success: false,
        });
      }
    })
    .catch((error) => {
      if (error) {
        return res.status(500).json({
          success: false,
          message: "Internal Server error!!!",
          error: error.message,
        });
      }
    });
});

/**
 * METHOD = POST
 * PATH = /create
 */
FoodRouter.post("/create", function (req, res, next) {
  const {
    name,
    description,
    picture,
    restaurantId,
    generalDetails,
    pricingDetails,
  } = req.body;
  const newFood = new FoodModel({
    name,
    picture,
    description,
    restaurantId,
    generalDetails,
    pricingDetails,
  });
  newFood
    .save()
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          message: "Food created successfully!!!",
          success: true,
          data: response,
        });
      } else {
        return res.status(500).json({
          message: "Something went wrong!!!",
          success: false,
          error: "Internal server error!!!",
        });
      }
    })
    .catch((error) => {
      return res.status(400).json({
        message: "Bad request!!!",
        success: false,
        error: error.message,
      });
    });
});

module.exports = FoodRouter;
