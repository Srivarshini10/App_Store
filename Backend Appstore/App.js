const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors=require("cors")
const userRouter = require("./routes/userRoutes");

dotenv.config();
mongoose.connect(process.env.DATABASE_URL).then(() => {
  console.log("Database is connected");
});

const app = express();
app.use(cors())
app.use(express.json());

app.use("/apps", userRouter);

app.listen(5000, () => {
  console.log("Server Running");
});