const { Router } = require("express");
const { updateUser, deleteUser } = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;