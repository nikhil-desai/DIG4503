import Express from "Express";
import fs from "fs";

// Express Definitions
const App = Express();
const port = 3010;

//Database Vars
let fileContents = fs.readFileSync("database.json");
let database = JSON.parse(fileContents);

// Default Route
App.get("/", (request, response) => {
  response.send("App is running.");
});

// Name Route
App.get("/employees/:name", (request, response) => {
  let result = { error: "not found" };

  database.forEach((value) => {
    if (request.params.name == value.name) {
      result = value;
    }
  });
  response.json(result);
});

// Age Route
App.get("/ages/:number", (request, response) => {
  let result = { error: "not found" };

  database.forEach((value) => {
    if (request.params.number == value.age) {
      result = value;
    }
  });
  response.json(result);
});

//Running the App
App.listen(port, () => {
  console.log("Running server...");
});
