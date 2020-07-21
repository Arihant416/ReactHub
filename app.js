const express = require("express"),
  app = express(),
  PORT = process.env.PORT || 2500,
  mongoose = require("mongoose"),
  { mongoURL } = require("./config/key");

mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.on("connected", () => {
  console.log("Atlas connected");
});
mongoose.connection.on("error", () => {
  console.log("Failed to connect Atlas");
});
require("./models/userModel");
require("./models/dataModel");
//Routes Required
app.use(express.json());
app.use(require("./routes/userRoutes"));
app.use(require("./routes/dataroutes"));
app.use(require("./routes/userProfile"));

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
