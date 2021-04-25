import MongoClient from "mongodb";
// Adding Chalk Module ES6 Version
import chalk from 'chalk';
// Adding boxen
import boxen from 'boxen';

// Database URL
const URL = "mongodb+srv://ndesai:FjZPHv5M0Jie7Qxb@cluster0.oewwc.mongodb.net/";

// Getting Airbnb Data
MongoClient.connect(URL, { useUnifiedTopology: true })
  .then((connection) => {
    // Getting Airbnb Data
    let database = connection.db("sample_airbnb");
    let collection = database.collection("listingsAndReviews");
    let cursor = collection.find({
      "review_scores.review_scores_rating": { $gte: 99 },
      beds: { $gte: 5 },
      price: { $lte: 200.0 },
    });
    // Listing Airbnb data
    cursor.forEach(
      (document) => {
        // Blue Bold Listing & Blue Background || Green Bold Price & Green BG
        // Every item is boxed using 'boxen'
        console.log(boxen(chalk.blue.bold('Listing Name: ') + chalk.black.bgBlue(document.name) + 
        '\n' + chalk.green.bold('Price: ') + chalk.black.bgGreen(document.price), {padding: 1}));
      },
      () => {
        connection.close();
      }
    );
  })
  // Catching Errors
  .catch((error) => {
    console.log("Error: " + error);
  });
