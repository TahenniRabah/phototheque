const mongoose = require("mongoose");
const { Schema } = mongoose;

const albumSchema = new Schema(
  {
    titre: { type: String, required: true, unique: true },
    images: [String],
  },
  { timestamps: true }
);

const Album = mongoose.model("Album", albumSchema);
module.exports = Album;
