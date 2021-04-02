// Imports
import Express from "Express";
import fs from "fs";
import cors from "cors";


// Express Definitions
const App = Express();
const port = 3010;

//Before any Route
App.use(cors());

//Database Vars
let fileContents = fs.readFileSync("database.json");
let database = JSON.parse(fileContents);

// Default Route
App.use("/", Express.static("client/build"));

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

// Adding Data
App.post("/employee/:name/:age", (req, res) => {
  let result = {
    "name": req.params.name,
    "age": parseInt(req.params.age)
  };

  database.push(result);

  fs.writeFileSync("database.json", JSON.stringify(database, null, '\t'));

  res.json(result);
});

//Running the App
App.listen(port, () => {
  console.log("Running server...");
});
