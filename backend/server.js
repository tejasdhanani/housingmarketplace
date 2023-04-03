const path = require("path");
const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT;
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const mongoose = require("mongoose");

connectDB();

const app = express();

app.use(express.json());
app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));

app.use("/api/houses", require("./routes/houseRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

// app.listen(port, () => console.log(`Server started n port ${port}`));
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => console.log(`Server running on port ${port}`));
});
