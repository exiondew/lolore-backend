const sanitizeHtml = require("sanitize-html");

const ALLOWED_TAGS = [];
const ALLOWED_ATTRIBUTES = {};

const sanitize = (obj) => {
  if (typeof obj === "string") {
    return sanitizeHtml(obj, {
      allowedTags: ALLOWED_TAGS,
      allowedAttributes: ALLOWED_ATTRIBUTES,
    });
  } else if (Array.isArray(obj)) {
    return obj.map(sanitize);
  } else if (obj !== null && typeof obj === "object") {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, sanitize(value)])
    );
  }
  return obj;
};

module.exports = sanitize;
