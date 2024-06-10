require("dotenv").config();
const mongoose = require("mongoose");
const fs = require("fs");
const csv = require("csv-parser");
const Property = require("./models/Property");

// MongoDB connection string from .env file
const uri = process.env.MONGODB_URI;

mongoose
  .connect(uri, { dbName: "TsangRealStateDB" })
  .then(() => {
    console.log("MongoDB connected...");
    readCSVAndInsertData();
  })
  .catch((err) => {
    console.error("Connection error", err);
  });

function readCSVAndInsertData() {
  const results = [];

  fs.createReadStream("data/properties.csv") // Ensure the path to your CSV file is correct
    .pipe(
      csv({
        headers: ["propertyTitle", "destinationURL", "status"],
        skipLines: 1, // Skip the header row if your CSV file has headers
      })
    )
    .on("data", (data) => {
      console.log("Read data:", data); // Debugging: log the data read from CSV
      if (data.propertyTitle && data.status) {
        // Ensure mandatory fields are present
        if (!data.destinationURL) {
          data.destinationURL = ""; // Handle empty destinationURL
        }
        results.push(data);
      } else {
        console.warn("Skipping incomplete record:", data); // Warn about incomplete records
      }
    })
    .on("end", () => {
      console.log("All data read:", results); // Debugging: log all data read from CSV
      Property.insertMany(results)
        .then(() => {
          console.log("Data inserted successfully");
          mongoose.connection.close();
        })
        .catch((err) => {
          console.error("Error inserting data:", err);
        });
    });
}
