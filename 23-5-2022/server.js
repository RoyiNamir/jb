//https://jsbin.com/leqijuhozi/1/edit?html,js,console,output

const express = require("express");
const app = express();
var cors = require("cors");
const port = 3000;
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
let ourArray = [1, 2, 3, 4, 5];

app.get("/sum", (req, res) => {
  let num1 = req.query.aaa;
  let num2 = req.query.bbb;

  res.json({ result: +num1 + +num2 });
});

app.get("/getAllItems", (req, res) => {
  res.json({ arr: ourArray });
});

app.post("/insertNewItem", (req, res) => {
  ourArray.push(req.body.newItem);
  res.json({ msg: "done" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//new example of pushing : https://jsbin.com/vuwizeyuce/1/edit?html,js,output
