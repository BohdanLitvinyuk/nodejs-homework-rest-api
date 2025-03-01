// // const contacts = require("../models/contacts.js");
// const { Contact } = require("../models/contact");

// const { HttpError, ctrlWrapper } = require("../helpers");



// const getById = async (req, res) => {
// 	const { contactId } = req.params;
// 	const result = await Contact.findById(contactId);
// 	if (!result) {
// 		throw HttpError(404, "Not found");
// 	}
// 	res.json(result);
// };

// const addContact = async (req, res) => {
// 	const { _id: owner } = req.user;
// 	const result = await Contact.create({ ...req.body, owner });
// 	res.status(201).json(result);
// };

// const deleteById = async (req, res) => {
// 	const { contactId } = req.params;
// 	const result = await Contact.findByIdAndRemove(contactId);
// 	if (!result) {
// 		throw HttpError(404, "Not found");
// 	}
// 	res.json({
// 		message: "contact deleted",
// 	});
// };

// const updateById = async (req, res) => {
// 	const { contactId } = req.params;
// 	const result = await Contact.findByIdAndUpdate(contactId, req.body, {
// 		new: true,
// 	});
// 	if (!result) {
// 		throw HttpError(404, "Not found");
// 	}
// 	res.json(result);
// };
// const updateFavorite = async (req, res) => {
// 	const { contactId } = req.params;
// 	const result = await Contact.findByIdAndUpdate(contactId, req.body, {
// 		new: true,
// 	});
// 	console.log(req.body);
// 	if (!result) {
// 		throw HttpError(404, "not found");
// 	}
// 	res.status(200).json(result);
// };

// module.exports = {
// 	// getAll: ctrlWrapper(getAll),
// 	getById: ctrlWrapper(getById),
// 	addContact: ctrlWrapper(addContact),
// 	deleteById: ctrlWrapper(deleteById),
// 	updateById: ctrlWrapper(updateById),
// 	updateFavorite: ctrlWrapper(updateFavorite),
// };
