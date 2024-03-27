import { Router } from "express";
import { createSession } from "../controllers/paymentControllers.js";
import { checkAuth } from "../middleware/authMiddleware.js";

const router = Router();

router.post('/create-order', checkAuth, createSession)

export default router;