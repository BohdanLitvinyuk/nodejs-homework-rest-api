const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");
const Joi = require("joi");

const contactSchema = new Schema(
	{
		name: {
			type: String,
			required: [true, "Set name for contact"],
		},
		email: {
			type: String,
		},
		phone: {
			type: String,
		},
		favorite: {
			type: Boolean,
			default: false,
		},
	},
	{ versionKey: false },
);

contactSchema.post("save", mongooseError);

const addSchema = Joi.object({
	name: Joi.string().required(),
	email: Joi.string().required(),
	phone: Joi.string().required(),
	favorite: Joi.boolean(),
});

const updateFavorite = Joi.object({
	favorite: Joi.boolean().required().messages({ "any.required": "missing field favorite" }),
});
const schemas = {
	addSchema,
	updateFavorite,
};
const Contact = model("contact", contactSchema);

module.exports = {
	Contact,
	schemas,
};
