import express from 'express';
import { log, register, confirm } from '../controllers/userController.js';

const router = express.Router();

router.post('/', log);
router.post('/register', register);
router.get('/confirm/:token', confirm);

export default router;