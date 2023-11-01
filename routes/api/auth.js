const express = require("express");
const router = express.Router();
const {
	register,
	login,
	logout,
	getCurrent,
} = require("../../controllers/auth/index");
const { validateBody, authenticate } = require("../../middlewares");
const { schemas } = require("../../models/user");

router.post("/register", validateBody(schemas.registerSchema), register);
router.post("/login", validateBody(schemas.loginSchema), login);
router.post("/logout", authenticate, logout);
router.get("/current", authenticate, getCurrent);

module.exports = router;
