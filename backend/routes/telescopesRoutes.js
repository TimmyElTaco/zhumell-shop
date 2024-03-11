import express from 'express';
import { getTelescopes, getTelescope } from '../controllers/telescopesControllers.js';

const router = express.Router();

router.get('/', getTelescopes);
router.get('/:id', getTelescope);

export default router;