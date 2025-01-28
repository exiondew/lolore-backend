const { model, Schema, Types } = require("mongoose");
const { LogActionTypes } = require("../constants");

const LogSchema = new Schema({
  action: {
    type: String,
    required: true,
    trim: true,
    enum: LogActionTypes,
  },
  entity: {
    type: {
      type: String,
      required: true,
      trim: true,
      enum: ["champion", "region", "race", "story", "photo", "avatar"],
    },
    id: {
      type: Types.ObjectId,
      required: true,
      trim: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
  },
  reason: {
    type: String,
    required: true,
    trim: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
  moderator: {
    id: { type: Types.ObjectId, required: false, trim: true },
    name: { type: String, trim: true, required: true },
  },
});

const Log = model("Log", LogSchema);

module.exports = Log;
