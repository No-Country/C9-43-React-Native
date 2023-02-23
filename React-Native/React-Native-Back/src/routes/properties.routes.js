const { Router } = require("express");
const { getUserProperties, createProperty, updateProperty, deleteProperty } = require("../controllers/properties.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.get("/:id", authMiddleware, getUserProperties);
router.post("/", authMiddleware, createProperty);
router.put("/:id", authMiddleware, updateProperty);
router.delete("/:id", authMiddleware, deleteProperty);

module.exports = router;