require("dotenv").config();
const mongoose = require("mongoose");
if (process.env.NODE_ENV === "development") {
  mongoose.set("debug", true);
}
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
