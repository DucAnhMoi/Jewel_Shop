const mongoose = require("mongoose");
const Schema = mongoose.Schema;
import "./User.js";

const FeedbackSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
    content: { type: String, required: true },
    rate: { type: Number, required: true },
    media: { type: Object, default: { id: "", src: "" } },
    isReplied: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    collection: "feedbacks",
  }
);

export default mongoose.model("Feedback", FeedbackSchema);
