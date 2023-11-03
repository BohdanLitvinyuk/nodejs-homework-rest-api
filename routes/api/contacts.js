const express = require("express");
const {
	getAll,
	getById,
	addContact,
	deleteById,
	updateById,
	updateFavorite,
} = require("../../controllers/contacts/index");
const { validateBody, isValidId, authenticate } = require("../../middlewares");
const router = express.Router();

const { schemas } = require("../../models/contact");

router.get("/", authenticate, getAll);

router.get("/:contactId", authenticate, isValidId, getById);

router.post("/", authenticate, validateBody(schemas.addSchema), addContact);

router.delete("/:contactId", authenticate, isValidId, deleteById);

router.put(
	"/:contactId",
	authenticate,
	isValidId,
	validateBody(schemas.addSchema),
	updateById,
);
router.patch(
	"/:contactId/favorite",
	authenticate,
	isValidId,
	validateBody(schemas.updateFavorite),
	updateFavorite,
);

module.exports = router;
