const exp = require('express');
const cors = require('cors');
const app = exp();
app.use(exp.json())
app.use(exp.urlencoded({ extended: true }))
app.use(cors());

app.listen(5000, () => console.log('listening on port 5000'));

app.get('/api/hello', (req, res) => {
  res.json({ hello: 'Hello From Express!!' });
})
app.post('/api/world', (req, res) => {
  const { msg } = req.body;
  res.send(`I received your POST request. This is what you sent me:${msg}`);
})