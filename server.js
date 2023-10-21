const express = require("express");
const dotenv = require("dotenv");
dotenv.config();

const morganMiddleware = require("./middlewares/morgan.middleware");
const customErrorHandler = require("./middlewares/custom-error-handler.middleware");
const healthCheckRouter = require("./routes/health-check.route");
const userRouter = require("./routes/user.route");

const app = express();

app.use(morganMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/health-check", healthCheckRouter);
app.use("/api/v1/streak-check", userRouter);

app.use(customErrorHandler);

module.exports = app;