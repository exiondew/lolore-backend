const { model, Schema } = require("mongoose");

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    trim: true,
    enum: ["member", "premium", "admin", "developer"],
    default: "member",
  },
  avatar: {
    type: String,
    required: false,
    trim: true,
  },
});

const User = model("User", UserSchema);

module.exports = User;

/*

  favorite_stories: [
    {
      type: Types.ObjectId,
      required: false,
      default: [],
    },
  ],
  favorite_champions: [
    {
      type: Types.ObjectId,
      ref: "Champion",
    },
  ],

*/
