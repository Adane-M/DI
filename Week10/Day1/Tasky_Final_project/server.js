const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const db = require('./connections/db.js');
const path = require('path');

const routerUsers = require('./routes/users.js');
const tasksRouts = require('./routes/db_routes.js');

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }))

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.listen(process.env.PORT || 8080, () => console.log(`running on port : ${process.env.PORT || 8080}`));



app.use('/users', routerUsers);
app.use('/tasks', tasksRouts);

app.use('/', express.static(path.join(__dirname, 'Client/build')));
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './Client/build', 'index.html'))
});
