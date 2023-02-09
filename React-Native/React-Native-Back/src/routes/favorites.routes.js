const { Router } = require("express");
const { createFavorite, deleteFavorite } = require("../controllers/favorites.controllers");

const router = Router();

router.post("/", createFavorite);
router.delete("/:id", deleteFavorite);

module.exports = router;