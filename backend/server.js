const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const port = process.env.PORT;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/houses", require("./routes/houseRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Undo server frontend

app.use(errorHandler);

app.listen(port, () => console.log(`Server started n port ${port}`));
