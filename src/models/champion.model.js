const { model, Schema, Types } = require("mongoose");

const { ChampionNames } = require("../constants");
const { RoleNames } = require("../constants");

// schema
const ChampionSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      enum: ChampionNames,
      unique: true,
    },
    role: {
      type: String,
      required: true,
      trim: true,
      enum: RoleNames,
    },
    race: {
      type: Types.ObjectId,
      ref: "Race",
      required: true,
    },
    region: {
      type: Types.ObjectId,
      ref: "Region",
      required: true,
    },
    avatar: { type: String, required: true, trim: true },
    date: { type: String, required: false, match: /^\d{2}-\d{2}$/ },
    quotes: [{ type: String, required: false, trim: true }],
    title: { type: String, required: false, trim: true },
    story: { type: String, required: true, trim: true },
    photos: [{ type: String, required: false, trim: true }],
    factions: [{ type: String, required: false, trim: true }],
    related_champions: [
      { type: String, required: false, trim: true, enum: ChampionNames },
    ],
  },
  { timestamps: true }
);

const Champion = model("Champion", ChampionSchema);

module.exports = Champion;
