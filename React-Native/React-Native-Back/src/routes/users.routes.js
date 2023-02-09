const { Router } = require("express");
const { updateUser, deleteUser } = require("../controllers/users.controllers");

const router = Router();

router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;