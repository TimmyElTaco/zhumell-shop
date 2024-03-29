import express from 'express';
import { getTelescopes, getTelescope } from '../controllers/telescopesControllers.js';
import addComment from '../helpers/addComment.js';

const router = express.Router();

router.get('/', getTelescopes);
router.get('/:product_id', getTelescope);
router.post('/comment', addComment);

export default router;