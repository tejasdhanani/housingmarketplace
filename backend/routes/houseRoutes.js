const express = require("express");
const router = express.Router();
const {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
} = require("../controllers/houseController");

const { protect } = require("../middleware/authMiddleware");

router.route("/").get(protect, getHouses).post(protect, setHouse);
router.route("/:id").delete(protect, deleteHouse).put(protect, updateHouse);

module.exports = router;
