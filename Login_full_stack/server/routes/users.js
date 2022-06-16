import {getUsers, register, login, logout} from '../controllers/users.js';
import express from 'express';

const router = express.Router();

router.get('/users', getUsers);
router.post('/register', register);
router.post('/login', login);
router.get('/logout', logout);

export default router; //using "type":"module" in package.json=>no need for export.modules
