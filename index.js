// task1
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
// task1



// const express = require("express");
// const app = express();

// const cards = [
//   {id: 1, number: 142581},
//   {id: 2, number: 897465},
//   {id: 3, number: 459682},
//   {id: 4, number: 142583},
//   {id: 5, number: 743685}
// ]

// app.get("/card"), function (req, res) {
//   res.json(cards);
// }

// app.get('/card/:id', function (req, res) {
//   // res.send(JSON.stringify(cards.find((card) => card.id == req.params.id)));
//   const card = cards.find((card) => card.id === parseInt(req.params.id));
//   if(!card) {
//     res.status(404).send("Card not found");
//   }
//   res.json(card);
//   res.status(200).send("OK");
// });

// app.listen(3000, function () {
//     console.log('Example app listening on port 3000!');
// });

// const express = require("express");
// const app = express();
// const phonebooks = [];
// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.post('/phonebook', function (req, res) {
//   phonebooks.push(req.body);
//   res.json(req.body);
// });
// app.get('/phonebook', function (req, res) {
//  res.json(phonebooks);
// });
// app.listen(3000, () =>
//   console.log(`App listening at port 3000`)
// );