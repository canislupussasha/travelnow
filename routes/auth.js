const express = require("express");
const register = require("./register")
const register = require("./login")
const register = require("./logout")
const router = express.Router();

router.post("/register", register)
router.post("/login", register)
router.get("/logout", logout)

module.exports = router;