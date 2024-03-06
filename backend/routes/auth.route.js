import express from 'express';
import { getUser, registerUser, loginUser } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/users', getUser);
router.post('/register', registerUser);
router.post('/login', loginUser);

export default router;