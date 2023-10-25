// const contacts = require("../models/contacts.js");
const Contact = require("../models/contact")

const { HttpError, ctrlWrapper } = require("../helpers");



const getAll = async (req, res) => {
	const result = await Contact.find();
	if (!result) {
		throw HttpError(404, "Not found");
	}
	res.json(result);
};

// const getById = async (req, res) => {
// 	const { contactId } = req.params;
// 	const result = await contacts.getContactById(contactId);
// 	if (!result) {
// 		throw HttpError(404, "Not found");
// 	}
// 	res.json(result);
// };
const addContact = async (req, res) => {
	const result = await Contact.create(req.body);
	res.status(201).json(result);
};

// const deleteById = async (req, res) => {
// 	const { contactId } = req.params;
// 	const result = await contacts.removeContact(contactId);
// 	if (!result) {
// 		throw HttpError(404, "Not found");
// 	}
// 	res.json({
// 		message: "contact deleted",
// 	});
// };
// const updateById = async (req, res) => {
	
// 	const { contactId } = req.params;
// 	const result = await contacts.updateContact(contactId, req.body);
// 	if (!result) {
// 		throw HttpError(404, "Not found");
// 	}
// 	res.json(result);
// };

module.exports = {
	getAll:ctrlWrapper(getAll),
	// getById:ctrlWrapper(getById),
	addContact:ctrlWrapper(addContact),
	// deleteById:ctrlWrapper(deleteById),
	// updateById:ctrlWrapper(updateById),
};
