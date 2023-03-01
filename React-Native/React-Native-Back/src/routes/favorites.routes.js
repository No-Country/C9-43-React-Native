const { Router } = require("express");
const { createFavorite, deleteFavorite } = require("../controllers/favorites.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, createFavorite);
router.delete("/:id", authMiddleware, deleteFavorite);

module.exports = router;