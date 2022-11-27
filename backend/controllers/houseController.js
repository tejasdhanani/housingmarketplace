const asyncHandler = require("express-async-handler");

// @desc    Get houses
// @route   GET /api/houses
// @access  Public
const getHouses = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get houses" });
});

// @desc    Set houses
// @route   POST /api/houses
// @access  Private
const setHouse = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("Please add a text field");
  }

  res.status(200).json({ message: "Set house" });
});

// @desc    Update house
// @route   PUT /api/houses/:id
// @access  Private
const updateHouse = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update house ${req.params.id}` });
});

// @desc    Delete house
// @route   DELETE /api/houses/:id
// @access  Private
const deleteHouse = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete house ${req.params.id}` });
});

module.exports = {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
};
