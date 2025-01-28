const { model, Schema, Types } = require("mongoose");

const { Regex, RegionNames } = require("../constants");

const RegionSchema = new Schema(
  {
    name: {
      trim: true,
      unique: true,
      type: String,
      required: true,
      enum: RegionNames,
    },
    description: {
      trim: true,
      type: String,
      required: true,
    },
    capital: {
      trim: true,
      type: String,
      required: false,
      default: "Unknown",
    },
    images: {
      type: [String],
      required: false,
      trim: true,
      validate: {
        validator: (urls) => {
          return urls.every((url) => Regex.URL_REGEX.test(url));
        },
        message: "Invalid image URL",
      },
    },
    leader: {
      type: Types.ObjectId,
      ref: "Champion",
      required: false,
    },
    enemies: {
      type: Types.ObjectId,
      ref: "Champion",
      required: false,
    },
    allies: {
      type: Types.ObjectId,
      ref: "Champion",
      required: false,
    },
    culture: {
      type: String,
      required: false,
      trim: true,
    },
    history: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// export model
const Region = model("Region", RegionSchema);

module.exports = Region;
