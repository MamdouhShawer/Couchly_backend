import { Router } from "express";
import { showDashboard, showDashboard2 } from "../controller/dash.js";

const router = Router();

router.get("/", showDashboard);
router.get("/", showDashboard2);

export default router;
