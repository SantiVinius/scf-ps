const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();

app.set("view engine", "jade");

app.use(express.json());
app.use(routes);
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

const port = 3000;
app.listen(port, () => {
  console.log("Express server listening on port " + port);
});
