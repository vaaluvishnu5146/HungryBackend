const AuthRouter = require("express").Router();
const AuthModel = require("../Models/Authentication.model");

/**
 * METHOD = GET
 * PATH = /getAllUser
 */
AuthRouter.get("/getAllUser", async function (req, res, next) {
  try {
    const response = await AuthModel.find();
    if (response.length > 0) {
      res.status(200).json({
        message: "Users Fetched Successfully!!!",
        data: response,
        success: true,
      });
    } else {
      res.status(200).json({
        message: "No Users!!!",
        data: [],
        success: false,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      error: error,
      success: false,
    });
  }
});

/**
 * METHOD = POST
 * PATH = /createUser
 */
AuthRouter.post("/createUser", async function (req, res, next) {
  const { name, password, contactDetails, generalDetails, addressDetails } =
    req.body;

  try {
    const newUser = new AuthModel({
      name,
      password,
      contactDetails,
      generalDetails,
      addressDetails,
    });
    const response = await newUser.save();
    if (response && response._id) {
      // DATA CREATED
      res.status(200).json({
        success: true,
        message: "User created successfully!!!",
        data: response,
      });
    }
  } catch (error) {
    if (error && error.name && error.name === "ValidationError") {
      res.status(400).json({
        success: false,
        message: error._message,
        error: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal server error!!!",
        error: error,
      });
    }
  }
});

/**
 * METHOD = POST
 * PATH = /getUser/:id
 */
AuthRouter.get("/getUser/:id", async function (req, res, next) {
  try {
    const response = await AuthModel.findById(req.params.id);
    if (response && response._id) {
      res.status(200).json({
        success: true,
        message: "User fetched successfully!!!",
        data: response,
      });
    } else {
      res.status(200).json({
        success: false,
        message: "No user found!!!",
      });
    }
  } catch (error) {
    if (
      (error && error.name && error.name === "ValidationError") ||
      error.name === "CastError"
    ) {
      res.status(400).json({
        success: false,
        message: error._message,
        error: error.message,
      });
    } else {
      res.status(500).json({
        success: false,
        message: "Internal server error!!!",
        error: error,
      });
    }
  }
});

module.exports = AuthRouter;
