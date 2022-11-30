const mongoose = require('mongoose');
const Joi = require('joi');

const joigoose = require('joigoose')(mongoose);

const joiSchema = Joi.object().keys({
    empId: Joi.number().min(3).required(),
    name: Joi.string().min(5).required(),
    age: Joi.number().min(21).required(),
    email: Joi.required()
})

const mongooseSchema = new mongoose.Schema(joigoose.convert(joiSchema))

module.exports = mongoose.model('myDatabase', mongooseSchema)

