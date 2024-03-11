import express from 'express';
import { getAccessories, getAccessory } from '../controllers/accessoriesControllers.js';

const router = express.Router();

router.get('/', getAccessories);
router.get('/:id', getAccessory);

export default router;