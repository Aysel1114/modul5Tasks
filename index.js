const express = require("express");
const app = express();
const fs = require('fs');

let workers = [];

fs.readFile('./data.json', 'utf8', (err, data) => {
    if (!err) {
      console.log(data);
    } else {
      console.error(err);
    }
    workers = JSON.parse(data);
});

app.get("/workers", function (req, res) {
    res.json(workers);
})

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});