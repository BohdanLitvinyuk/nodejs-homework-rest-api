const { Contact } = require("../../models/contact");

const { HttpError, ctrlWrapper } = require("../../helpers");


const updateFavorite = async (req, res) => {
	const { contactId } = req.params;
	const result = await Contact.findByIdAndUpdate(contactId, req.body, {
		new: true,
	});
	console.log(req.body);
	if (!result) {
		throw HttpError(404, "not found");
	}
	res.status(200).json(result);
};

module.exports={
    updateFavorite: ctrlWrapper(updateFavorite),

}