const { Router } = require("express");
const { updateUser, deleteUser, getUserFavorites, getUserProperties } = require("../controllers/users.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/:id/properties", authMiddleware, getUserProperties);
router.get("/:id/favorites", authMiddleware, getUserFavorites);
router.put("/:id", authMiddleware, updateUser);
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;