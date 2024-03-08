import express from 'express';
import { obtenerTelescopes } from '../controllers/telescopesControllers.js';

const router = express.Router();

router.get('/', obtenerTelescopes);

export default router;