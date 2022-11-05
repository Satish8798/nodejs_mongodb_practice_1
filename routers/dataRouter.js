const express = require("express");
const dataModule = require("../modules/dataModule")

const router= express.Router();

router.get('/get',dataModule.get);

module.exports = router