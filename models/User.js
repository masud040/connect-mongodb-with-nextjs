const { default: mongoose } = require("mongoose");
const { minify } = require("next/dist/build/swc");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    default: "Anonymous",
    min: 2,
    max: 40,
  },
  email: {
    type: String,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
    min: 2,
    max: 60,
  },
});

const User = mongoose.models.User || mongoose.models("User", UserSchema);
export default User;
