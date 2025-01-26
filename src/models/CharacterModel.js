const { model, Schema } = require("mongoose");

const { Race, ChampionName, Region } = require("../constants");

const ChampionNames = Object.values(ChampionName);

// schema
const CharacterSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      enum: ChampionNames,
      unique: true,
    },
    race: {
      type: String,
      required: true,
      trim: true,
      enum: Object.values(Race),
    },
    region: {
      type: String,
      required: true,
      trim: true,
      enum: Object.values(Region),
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

module.exports = model("Character", CharacterSchema);
