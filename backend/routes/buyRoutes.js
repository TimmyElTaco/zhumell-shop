import { Router } from "express";
import { addOrder, createSession } from "../controllers/paymentControllers.js";
import { checkAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.post('/create-order', checkAuth, createSession);
router.post('/stripe-webhook', addOrder);

export default router;