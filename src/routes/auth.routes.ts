import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.controller';

const router = express.Router();

// Rota de cadastro
router.post('/register', registerUser);

// Rota de login
router.post('/login', loginUser);

export default router;