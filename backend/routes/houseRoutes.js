const express = require("express");
const router = express.Router();
const {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
  getAllHouses,
} = require("../controllers/houseController");

const { protect } = require("../middleware/authMiddleware");

// Private
router.route("/").get(protect, getHouses).post(protect, setHouse);
router.route("/:id").delete(protect, deleteHouse).put(protect, updateHouse);

// Public
router.route("/all").get(getAllHouses);

module.exports = router;
