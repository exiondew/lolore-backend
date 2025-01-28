/**
 * Joi doğrulama şemasıyla çalışan genel bir middleware.
 * @param {Object} JoiSchema - Joi doğrulama şeması.
 * @returns {Function} - Express middleware fonksiyonu.
 */
const validate = (JoiSchema) => (req, res, next) => {
  const { error } = JoiSchema.validate(req.body, { abortEarly: false });

  if (error) {
    const message = error.details.map((detail) => detail.message).join(", ");
    return res.status(400).json({ error: message });
  }

  next();
};

module.exports = validate;
