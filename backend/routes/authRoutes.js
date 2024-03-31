import express from 'express';
import { log, register, confirm, getUser } from '../controllers/userController.js';
import { checkAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/',checkAuth, getUser);

router.post('/login', log);
router.post('/register', register);
router.get('/confirm/:token', confirm);

export default router;