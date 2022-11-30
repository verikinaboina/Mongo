const Joi = require("joi");
const joiPostalCode = Joi.extend(require('joi-postalcode'))

const verifyEmpDetails = Joi.object({
    firstName: Joi.string().min(3).required(),
    lastName: Joi.string().min(3).required(),
    zipcode: joiPostalCode.string().min(5).required()
});

module.exports = verifyEmpDetails;