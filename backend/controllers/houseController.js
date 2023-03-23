const House = require("../models/houseModel");
const asyncHandler = require("express-async-handler");

// @desc    Get houses
// @route   GET /api/houses
// @access  Private
const getMyHouses = asyncHandler(async (req, res) => {
  const houses = await House.find({ user: req.user.id });

  res.status(200).json(houses);
});

// @desc    Get all houses
// @route   GET /api/houses
// @access  Public
const getAllHouses = asyncHandler(async (req, res) => {
  const houses = await House.find();

  res.status(200).json(houses);
});

// @desc    Set houses
// @route   POST /api/houses
// @access  Private
const setHouse = asyncHandler(async (req, res) => {
  if (!req.body.title) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  const {
    title,
    city,
    postalCode,
    description,
    rent,
    sqFt,
    type,
    laundry,
    bedroom,
    bathroom,
    petsAllowed,
    canSmoke,
    isFurnished,
    lease,
    walkthroughVideo,
  } = req.body;

  const house = await House.create({
    title,
    user: req.user.id,
    image: {
      data: req.file.buffer,
      contentType: req.file.mimetype,
    },
    city,
    postalCode,
    description,
    rent,
    sqFt,
    type,
    laundry,
    bedroom,
    bathroom,
    petsAllowed,
    canSmoke,
    isFurnished,
    lease,
    walkthroughVideo,
  });

  res.status(200).json(house);
});

// @desc    Update house
// @route   PUT /api/houses/:id
// @access  Private
const updateHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(400);
    throw new Error("House not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the house user
  if (house.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  const updatedHouse = await House.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedHouse);
});

// @desc    Delete house
// @route   DELETE /api/houses/:id
// @access  Private
const deleteHouse = asyncHandler(async (req, res) => {
  const house = await House.findById(req.params.id);

  if (!house) {
    res.status(400);
    throw new Error("House not found");
  }

  // Check for user
  if (!req.user) {
    res.status(401);
    throw new Error("User not found");
  }

  // Make sure the logged in user matches the house user
  if (house.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error("User not authorized");
  }

  await house.remove();

  res.status(200).json({ id: req.params.id });
});

module.exports = {
  getMyHouses,
  getAllHouses,
  setHouse,
  updateHouse,
  deleteHouse,
};
