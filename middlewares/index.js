const validateBody = require("./validate");
const isValidId = require("./isValidId")
const upload = require("./upload");

const authenticate = require("./authenticate")
module.exports={
    validateBody,
    isValidId,
    authenticate,
    upload,
}