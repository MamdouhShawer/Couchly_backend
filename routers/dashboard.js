import { Router } from "express";
import { showDashboard } from "../controller/dash.js";

const router = Router();

router.get("/", showDashboard);

export default router;
