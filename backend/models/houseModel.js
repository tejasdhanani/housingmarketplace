const mongoose = require("mongoose");

const houseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a text value"],
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    city: {
      type: String,
      // required: [true, "Please add a city"],
    },
    postalCode: {
      type: String,
      // required: [true, "Please add a postal code"],
    },
    description: {
      type: String,
    },
    rent: {
      type: Number,
      // required: [true, "Please add rent"],
    },
    sqFt: {
      type: Number,
    },
    type: {
      type: String,
    },
    laundry: {
      type: String,
      // required: [true, "Please add laundry details"],
    },
    bedroom: {
      type: Number,
      // required: [true, "Please add bedroom details"],
    },
    bathroom: {
      type: Number,
      // required: [true, "Please add bathroom details"],
    },
    petsAllowed: {
      type: Boolean,
      // required: [true, "Please add pet details"],
    },
    canSmoke: {
      type: Boolean,
      // required: [true, "Please add smoking details"],
    },
    isFurnished: {
      type: Boolean,
      // required: [true, "Please add furnishing details"],
    },
    lease: {
      type: String,
      // required: [true, "Please add lease details"],
    },
    walkthroughVideo: {
      type: String,
      // required: [true, "Please add walkthroughVideo details"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("House", houseSchema);
