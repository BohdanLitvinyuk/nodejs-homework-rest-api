const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");
const Joi = require("joi");

const userSchema = new Schema(
	{
		password: {
			type: String,
			required: [true, "Set password for user"],
		},
		email: {
			type: String,
			required: [true, "Email is required"],
			unique: true,
		},
		subscription: {
			type: String,
			enum: ["starter", "pro", "business"],
			default: "starter",
		},
		token: { type: String },
		avatarURL: { type: String ,
		required:true},
		verify:{
			type:Boolean,
			default:false,
		},
		verificationToken:{
			type:String,
			default: "",
			required: [true, 'Verify token is required']
		},

	},
	{ versionKey: false, timestamps: true },
);

userSchema.post("save", mongooseError);

const registerSchema = Joi.object({
	password: Joi.string().required(),
	email: Joi.string().required(),
});

const loginSchema = Joi.object({
	email: Joi.string().required(),
	password: Joi.string().required(),
});

const emailSchema = Joi.object({
	email:Joi.string().required()
});
const schemas = {
	registerSchema,
	loginSchema,
	emailSchema
};

const User = model("user", userSchema);

module.exports = {
	User,
	schemas,
};
