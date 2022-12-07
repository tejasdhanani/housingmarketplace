const path = require("path");
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

<<<<<<< HEAD
// Undo server frontend
=======
// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "frontend", "build", "index.html")
    )
  );
} else {
  app.get("/", (req, res) => res.send("Please set to production"));
}
>>>>>>> fb1e837454581b18f3118177a7d0634ef37badd6

app.use(errorHandler);

app.listen(port, () => console.log(`Server started n port ${port}`));
