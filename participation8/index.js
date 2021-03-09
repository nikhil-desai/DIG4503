import Express from "Express";
// Express Definitions
const App = Express();
const port = 3000;

// Default Route
App.get("/", function (request, response) {
  response.send("App is running.");
});
// Favorite Candy Route
App.get("/favorite/:candy", function (request, response) {
  response.send("Your favorite candy is: " + request.params.candy);
});
// Least Favorite Candy Route
App.get("/leastfavorite/:candy", function (request, response) {
  response.send("Your least favorite candy is: " + request.params.candy);
});
//Running the App
App.listen(port, () => {
  console.log("Running server...");
});
