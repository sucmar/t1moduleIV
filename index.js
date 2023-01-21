const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");

const app = express();
app.use(express.json()); // req => body
app.use(morgan('dev'));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/product/", productRouter);
app.use("/api/v1/user/", userRouter);

app.listen(process.env.PORT, () => {
  console.log(`App running on port ${process.env.PORT}`);
});
mongoose.set('strictQuery', false);

// MONGOOSE CONNECTION
mongoose.connect(process.env.DB_URL, {}).then(async (con) => {
  console.log("connected to mongo");

}).catch((err) => {
  console.log(err);
});
