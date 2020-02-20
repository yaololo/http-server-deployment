const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const express = require("express");

const path = require("path");
const app = express();

// parse application/x-www-form-urlencoded and parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// Serve static files from the React frontend app
app.use(
  express.static(path.join(__dirname + "/../client/dist"))
);

// Anything that doesn't match the above, send back index.html
app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname + "/../client/dist", "index.html"))
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server start on port ${PORT}`);

  console.log(path.join(__dirname + "/../client/dist", "index.html"))
  // db.on("error", console.error.bind(console, "MongoDB connection error:"));
  // db.once("open", () => {
  //   console.log("DB connected successfully");
  // });
});
