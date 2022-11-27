// @desc    Get houses
// @route   GET /api/houses
// @access  Public
const getHouses = (req, res) => {
  res.status(200).json({ message: "Get houses" });
};

// @desc    Set houses
// @route   POST /api/houses
// @access  Private
const setHouse = (req, res) => {
  res.status(200).json({ message: "Set house" });
};

// @desc    Update house
// @route   PUT /api/houses/:id
// @access  Private
const updateHouse = (req, res) => {
  res.status(200).json({ message: `Update house ${req.params.id}` });
};

// @desc    Delete house
// @route   DELETE /api/houses/:id
// @access  Public
const deleteHouse = (req, res) => {
  res.status(200).json({ message: `Delete house ${req.params.id}` });
};

module.exports = {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
};
