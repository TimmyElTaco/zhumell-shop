import express from 'express';
import { getBinoculars, getBinocular } from '../controllers/binocularsControllers.js';

const router = express.Router();

router.get('/', getBinoculars);
router.get('/:id', getBinocular);

export default router;