const express = require("express");
const bodyParser = require("body-parser");

function matchOne(text, pattern) {
  var result = text.match(pattern);
  console.log(result)
  return result;
}
function currency(input_str, pattern, matchOne) {
  var text = input_str;
  const c = matchOne(text, pattern);
  return c;
}
function matchTwo(text, pattern, replacement) {
  var result = text.replace(pattern, replacement);
  return result;
}
function replacech(input_str, pattern, replacement, matchTwo) {
  var text = input_str;
  const result = matchTwo(text, pattern, replacement);
  return result;
}

const app = express();
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const inputstr = String(req.body.str);
  var result =
    currency(inputstr, /£+[0-9][0-9]?/g, matchOne) +
    "<br>" +
    currency(inputstr, /(eggs|bread|vodka|costs)/g, matchOne) +
    "<br>" +
    replacech(inputstr, /£/g, "$", matchTwo);
  res.send(result);
});

app.listen(3000, function () {
  console.log("server is running on port 3000");
});
