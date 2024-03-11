import express from 'express';
import { log, register } from '../controllers/userController.js';

const router = express.Router();

router.post('/', log);
router.post('/register', register);

export default router;