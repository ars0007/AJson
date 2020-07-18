const express = require("express")
const router = express.Router()
const jsonService = require("../services/index")

router.post("/add",jsonService.saveJson)
router.get("/:id", jsonService.getJson)

module.exports = router