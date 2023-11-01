const dotenv = require("dotenv");
dotenv.config();

const { User } = require("../../models/user");
const { HttpError, ctrlWrapper } = require("../../helpers");

const logout = async (req, res) => {
	const { _id } = req.user;
	if (!_id) {
		throw HttpError(401, "Not authorized");
	}
	await User.findByIdAndUpdate(_id, { token: "" });
	res.json(204);
};

module.exports = {
	logout: ctrlWrapper(logout),
};
