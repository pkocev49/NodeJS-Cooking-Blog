const mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://pkocev:123456789Pk@cluster0.uwa2cqh.mongodb.net/Recipes?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Connected");
});

// MODELS
require("./Category");
require("./Recipe");
