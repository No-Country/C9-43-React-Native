const { Router } = require("express");
const { register, login, confirmation } = require("../controllers/auth.controllers");

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.get("/confirmation/:id/:token", confirmation);


module.exports = router;