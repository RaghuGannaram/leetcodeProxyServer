const logger = require("../configs/winston.config");

const checkHealth = (req, res) => {
    logger.debug("health-check.controller: Invoking health-check endpoint.");

    res.status(200).json({
        status: "success",
        message: "Health check endpoint invoked."
    });
}

module.exports = {
    checkHealth
}