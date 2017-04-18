"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

MongoClient.connect(MONGODB_URI, (err, db) => {
  // Log error if database connection unsucecssful
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }
  // Log message on successful database connection
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // Run database helpers on existing database
  const DataHelpers = require("./lib/data-helpers.js")(db);
  // Mount routes and populate with tweets using datahelpers
  const tweetsRoutes = require("./routes/tweets")(DataHelpers);
  app.use("/tweets", tweetsRoutes);

  // Run server and log successful initialization
  app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
  });
});

