const Joi = require("joi");

const deleteSchema = Joi.object({
  id: Joi.string().trim().required,
  reason: Joi.string().min(3).max(512).required(),
});

module.exports = { deleteSchema };
