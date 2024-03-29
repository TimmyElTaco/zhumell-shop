import express from 'express';
import { getAccessories, getAccessory } from '../controllers/accessoriesControllers.js';
import addComment from '../helpers/addComment.js';

const router = express.Router();

router.get('/', getAccessories);
router.get('/:id', getAccessory);
router.post('/comment', addComment);

export default router;