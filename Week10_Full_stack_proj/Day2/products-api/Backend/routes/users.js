const express = require('express');
const router = express.Router();

const {_getAllUsers} = require('../controlers/users.js');

router.get('/all',_getAllUsers)

module.exports = router
