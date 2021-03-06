const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");

// Serve up static assets
app.use(express.static("client/build"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/nytreact",
  {
    useMongoClient: true
  }
);

// Use apiRoutes
app.use("/api", apiRoutes);
// app.use("/api/saved", apiRoutes);
// app.use("/api/articles", apiRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
