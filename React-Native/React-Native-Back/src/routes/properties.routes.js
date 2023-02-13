const { Router } = require("express");
const { createProperty, updateProperty, deleteProperty } = require("../controllers/properties.controllers");
const authMiddleware = require("../middlewares/auth.middleware");

const router = Router();

router.post("/", authMiddleware, createProperty);
router.put("/:id", authMiddleware, updateProperty);
router.delete("/:id", authMiddleware, deleteProperty);

module.exports = router;