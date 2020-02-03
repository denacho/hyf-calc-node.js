const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const { add, subtract, multiply, divide } = require("./calc");
const OPERATIONS = { add, subtract, multiply, divide };

const app = express();
app.use(express.static("static"));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "static/index.html"));
});

app.post("/api/:op", (req, res) => {
  let number1 = req.body.number1;
  let number2 = req.body.number2;
  number1 = parseFloat(number1);
  number2 = parseFloat(number2);
  if (isNaN(number1) || isNaN(number2)) {
    res.json({ status: "error", message: "Please provide numbers." });
    return;
  }
  const op = req.params.op;
  if (!Object.keys(OPERATIONS).includes(op)) {
    res.json({ status: "error", message: "Invalid operation." });
    return;
  }
  const opFn = OPERATIONS[op];
  const result = opFn(number1, number2);

  res.json({ status: "ok", result });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
