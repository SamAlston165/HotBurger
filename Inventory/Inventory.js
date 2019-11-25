// Hotburger API

const express = require("express"); // routing
const app = express();

app.set("port", 82);

const fs = require("fs"); // log readout

//Logging https://www.npmjs.com/package/morgan
const morgan = require("morgan");
const json = require("morgan-json");
let accessLogStream = fs.createWriteStream("./logs.json", { flags: "a" });
const logFormat = json({
  Date: ":date[web]",
  Method: ":method",
  Route: ":url",
  Status: ":status"
});

// Routing Middleware.
app.use(
  morgan(logFormat, {
    stream: accessLogStream
  })
);

// Routes

// Monitoring Routes ------------------------>
app.get("/getcount/:item", (req, res) => {
  let qty = Math.floor(Math.random() * 10);
  res.json({
    item: item,
    quantity: qty
  });
});
app.post("/getcount/:item/:quantity", (req, res) => {
  res.send(`${req.params.item} quantity adjusted to ${req.params.quantity}`);
});

//------------------------------------------->

// 404 catch-all handler
app.use((req, res, next) => {
  res.status(404);
  res.send("404 - route not found.");
});

// 500 error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500);
  res.send("500 - Server Error");
});

app.listen(app.get("port"), function() {
  console.log(`Server running on ${app.get("port")}`);
});
