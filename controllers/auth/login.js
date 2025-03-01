const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ email });
	if (!user) {
		throw HttpError(401, "Email or password is wrong");
	}
	const passwordCompare = await bcrypt.compare(password, user.password);
	if (!passwordCompare) {
		throw HttpError(401, "Email or password is wrong");
	}
	const payload = {
		id: user._id,
	};
	const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
	await User.findByIdAndUpdate(user._id, { token });
	res.json({
		token,
		user: {
			email: user.email,
			subscription: user.subscription,
		},
	});
};

module.exports = {
	login: ctrlWrapper(login),
};
