const { Router } = require("express");
const { createProperty, updateProperty, deleteProperty } = require("../controllers/properties.controllers");

const router = Router();

router.post("/", createProperty);
router.put("/:id", updateProperty);
router.delete("/:id", deleteProperty);

module.exports = router;