// Making Express
const express = require("express");
const app = express();
const port = 3000;
// Using public folder
app.use("/public", express.static("public"));
// Serving the entry point
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// Serving Public Folder w/ default path
app.get("/public", (req, res) => {
});
// Send link in output
app.listen(port, () => {
  console.log(`Link: http://localhost:${port}`);
});
