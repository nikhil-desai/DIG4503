import MongoClient from "mongodb";
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
        console.log(document.name);
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
