const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const items = ["Buy Sneakers", "Practice Coding", "Workout at GYM"];

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static("public"));

//date and day
app.get("/", function(req, res) {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  var day = today.toLocaleDateString("en-us", options);

  res.render("list", { kindOfDay: day, newListItem: items });
});

//add functionality using push
app.post("/", function(req, res) {
  const item = req.body.new_item;

  if(item !== "") {
    items.push(item);
  }

  res.redirect("/");
});

//delete functionality using pop
app.post("/delete", function(req, res) {
  items.pop();

  res.redirect("/");
});

//port 4000
//npx kill-port 4000
app.listen(4000, function() {
  console.log("Server started on PORT 4000");
});