const RestaurantModel = require("../Models/Restaurant.model");
const { response } = require("../app");
const RestaurantRouter = require("express").Router();

/**
 * METHOD = GET
 * PATH = /getAllRestaurants
 */

RestaurantRouter.get("/getAllRestaurants", (req, res, next) => {
  RestaurantModel.find()
    .then((response) => {
      if (response && response.length > 0) {
        // SEND ALL RESTAURANTS DATA
        return res.status(200).json({
          message: "Restaurants fetched successfully!!!",
          result: {
            count: response.length,
            data: response,
          },
          success: true,
        });
      } else {
        // SEND NO RETAUURANTS
        return res.status(200).json({
          message: "No restaurants found!!!",
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
RestaurantRouter.post("/create", function (req, res, next) {
  const { restaurantName, contactDetails, generalDetails, addressDetails } =
    req.body;
  const newRestaurant = new RestaurantModel({
    restaurantName,
    contactDetails,
    generalDetails,
    addressDetails,
  });
  newRestaurant
    .save()
    .then((response) => {
      if (response && response._id) {
        return res.status(200).json({
          message: "Restaurant creatd successfully!!!",
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

module.exports = RestaurantRouter;
