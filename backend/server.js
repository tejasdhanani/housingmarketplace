const express = require("express");
const dotenv = require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use("/api/houses", require("./routes/houseRoutes"));

app.listen(port, () => console.log(`Server started n port ${port}`));
