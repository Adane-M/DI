const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
// const users_router = require('./routes/users');
// const products_router = require('./routes/products');
const users_router = require('./routes/users.js');
const products_router = require('./routes/products.js');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.listen(process.env.PORT||8080, ()=>{
  console.log(`listen on port ${process.env.PORT||8080}`);
})

app.use('/api/products', products_router);
app.use('/api/users', users_router);
