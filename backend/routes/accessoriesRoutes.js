import express from 'express';
import { getAccessories, getAccessory } from '../controllers/accessoriesControllers.js';
import addComment from '../helpers/addComment.js';
import { checkAuth } from '../middleware/authMiddleware.js';

const router = express.Router();

router.get('/', getAccessories);
router.get('/:product_id', getAccessory);
router.post('/comment', checkAuth, addComment);

export default router;