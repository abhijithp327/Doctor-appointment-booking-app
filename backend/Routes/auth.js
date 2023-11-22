import express from 'express';
import { login, register } from '../Controller/authController';




const router = express.Router();



router.post('/register', register);
router.post('/login', login);
