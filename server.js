var express = require('express');
var mongoose = require('mongoose');

var db = require('./models');

var PORT = process.env.PORT || 8080;
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/tcs-001";

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

require("./routes/apiRoutes")(app);
app.listen(PORT, function() {
  console.log("App running on port " + PORT + "!");
});