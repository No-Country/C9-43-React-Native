const { Router } = require("express");
const { createFavorite, deleteFavorite, getUserFavorites } = require("../controllers/favorites.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/:id", authMiddleware, getUserFavorites);
router.post("/", authMiddleware, createFavorite);
router.delete("/:id", authMiddleware, deleteFavorite);

module.exports = router;