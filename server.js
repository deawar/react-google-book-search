const express = require("express");
require('dotenv').config();
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;
// MongoDB cloud URL
const { MONGODB_URI } = process.env;
// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactreadinglist");
mongoose.connect(MONGODB_URI, {
  // All these to get rid of Mongoose warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('Sucessfully connected to MongoDb Cloud');
});
mongoose.connection.on('error', (error) => {
  console.log('Database Error:', error);
});

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
