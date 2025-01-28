const Joi = require("joi");

const createChampionSchema = Joi.object({
  name: Joi.string().min(2).max(64).trim().required(),
  role: Joi.string().valid("mage", "fighter").required(),
  title: Joi.string().min(3).max(255).required(),
  quotes: Joi.array().items(Joi.string().max(512)).optional(),
  avatar: Joi.string().uri().required(),
  date: Joi.date().optional(),
  related_champions: Joi.array().items(Joi.string()).optional(),
  raceID: Joi.string().required(),
  regionID: Joi.string().required(),
  story: Joi.string().required(),
  photos: Joi.array().items(Joi.string().uri()).optional(),
  factions: Joi.array().items(Joi.string()).optional(),
});

module.exports = { createChampionSchema };
