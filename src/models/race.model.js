const { model, Schema, Types } = require("mongoose");
const { RaceNames } = require("../constants");

const RaceSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      enum: RaceNames,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    regions: [
      {
        type: Types.ObjectId,
        ref: "Region",
        required: false,
      },
    ],
    champions: [
      {
        type: Types.ObjectId,
        ref: "Champion",
        required: false,
      },
    ],
    relationships: [
      {
        race: {
          type: Types.ObjectId,
          ref: "Race",
          required: false,
        },
        status: {
          type: String,
          required: false,
          default: "neutral",
          enum: [
            "neutral",
            "enemy",
            "ally",
            "allied_but_weak",
            "enemy_but_weak",
          ],
        },
      },
    ],
    history: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const Race = model("Race", RaceSchema);

module.exports = Race;
