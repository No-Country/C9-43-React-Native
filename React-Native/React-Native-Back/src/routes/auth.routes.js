const { Router } = require("express");
const { register } = require("../controllers/auth.controllers");

const router = Router();

router.post("/", register)


module.exports = router;