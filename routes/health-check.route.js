const express = require("express");
const healthCheckController = require("../controllers/health-check.controller");

const router = express.Router();

router.get("/", healthCheckController.checkHealth);

module.exports = router;