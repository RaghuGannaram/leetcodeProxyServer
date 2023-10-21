const logger = require("../configs/winston.config");
const catchAsyncError = require("../middlewares/catch-async-error.middleware");
const { streakService } = require("../services/user.service");

const getStreak = catchAsyncError(async (req, res) => {
    logger.debug("user.controller: Invoking user endpoint.");

    const data = await streakService();

    logger.debug("user.controller: Streak data fetched successfully.");

    res.status(200).json({
        status: "success",
        message: data
    });
})

module.exports = {
    getStreak
}