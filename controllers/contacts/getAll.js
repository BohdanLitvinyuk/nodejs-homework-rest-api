const { Contact } = require("../../models/contact");

const { HttpError, ctrlWrapper } = require("../../helpers");



const getAll = async (req, res) => {
	const { _id: owner } = req.user;
	const { page = 1, limit = 20 } = req.query;
	const skip = (page - 1) * limit;

	const result = await Contact.find({ owner }, "-createdAt -updatedAt", {	skip,limit,}).populate("owner", "id email");
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

module.exports = {getAll: ctrlWrapper(getAll)}