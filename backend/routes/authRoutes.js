import express from 'express';
import { log, register, confirm } from '../controllers/userController.js';
import { checkAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', log);
router.post('/register', register);
router.get('/confirm/:token', confirm);

router.get('/checkAuth', checkAuth)

export default router;