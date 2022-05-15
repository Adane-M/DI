const exp = require('express');
const cors = require('cors');
const app = exp();
app.use(exp.json())
app.use(exp.urlencoded({ extended: true }))
app.use(cors());

app.listen(5000, () => console.log('listening on port 5000'));
//day4 week8 xpninja
const customers = [
  { "id": 1, "firstName": "John", "lastName": "Doe" },
  { "id": 2, "firstName": "Jane", "lastName": "Doe" },
  { "id": 3, "firstName": "Ziv", "lastName": "Chen" },
  { "id": 4, "firstName": "Isaac", "lastName": "Groisman" },
  { "id": 5, "firstName": "Avner", "lastName": "Maman" },
  { "id": 6, "firstName": "Megan", "lastName": "Dreyfuss" }
];

app.get('/api/customers/', (req, res) => {

  res.send(customers)
})

app.get('/', (req, res) => {
  res.json([
    { id: 1, username: "somebody" },
    { id: 2, username: "somebody_else" },
  ]);
});
// app.get('/api/hello', (req, res) => {
//   res.json({ hello: 'Hello From Express!!' });
// })
// app.post('/api/world', (req, res) => {
//   const { msg } = req.body;
//   res.send(`I received your POST request. This is what you sent me:${msg}`);
// })