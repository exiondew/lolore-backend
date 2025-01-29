const { model, Schema, Types } = require("mongoose");

const FavoriteSchema = new Schema({
  user: {
    type: Types.ObjectId,
    required: true,
    ref: "User",
  },
  champions: [
    {
      type: Types.ObjectId,
      required: true,
      ref: "Champion",
    },
  ],
  stories: [
    {
      type: Types.ObjectId,
      required: true,
    },
  ],
  regions: [
    {
      type: Types.ObjectId,
      required: true,
      ref: "Region",
    },
  ],
});

const Favorite = model("Favorite", FavoriteSchema);

module.exports = Favorite;
