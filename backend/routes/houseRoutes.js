const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const fs = require("fs");

const Storage = multer.memoryStorage();

const upload = multer({ storage: Storage });
const {
  getHouses,
  setHouse,
  updateHouse,
  deleteHouse,
  getAllHouses,
} = require("../controllers/houseController");

const { protect } = require("../middleware/authMiddleware");

// Private
router
  .route("/")
  .get(protect, getHouses)
  .post(protect, upload.single("image"), setHouse);
router.route("/:id").delete(protect, deleteHouse).put(protect, updateHouse);

// Public
router.route("/all").get(getAllHouses);

module.exports = router;
