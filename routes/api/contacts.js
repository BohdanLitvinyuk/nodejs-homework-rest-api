const express = require("express");
const ctrl = require("../../controllers/contacts");
const router = express.Router();

const {validateBody} = require("../../middlewares/validate");
const schemas = require("../../schemas/contacts");

router.get("/", ctrl.getAll);

// router.get("/:contactId", ctrl.getById);

router.post("/", ctrl.addContact);

// router.delete("/:contactId", ctrl.deleteById);

// router.put("/:contactId",validateBody(schemas.addSchema), ctrl.updateById);

module.exports = router;


// validateBody(schemas.addSchema),