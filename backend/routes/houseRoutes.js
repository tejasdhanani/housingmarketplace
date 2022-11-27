const express = require("express");
const router = express.Router();
const {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
} = require("../controllers/houseController");

router.route("/").get(getHouses).post(setHouse);
router.route("/:id").delete(deleteHouse).put(updateHouse);

module.exports = router;
