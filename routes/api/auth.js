const express = require("express");
const router = express.Router();
const {
	register,
	login,
	logout,
	getCurrent,
	updateAvatar
} = require("../../controllers/auth/index");
const { validateBody, authenticate, upload } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), register);
router.post("/login", validateBody(schemas.loginSchema), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);
router.patch("/avatars", authenticate, upload.single("avatar"), updateAvatar )
module.exports = router;
