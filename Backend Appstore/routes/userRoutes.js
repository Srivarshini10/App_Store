const express = require("express");
const { getApps } = require("../controller/userController");

const router = express.Router();

router.get("/", getApps);

module.exports = router;
