import express from 'express';
import { getBinoculars, getBinocular } from '../controllers/binocularsControllers.js';
import addComment from '../helpers/addComment.js';

const router = express.Router();

router.get('/', getBinoculars);
router.get('/:product_id', getBinocular);
router.post('/comment', addComment);

export default router;