import { Router } from "express";
import { showDashboard } from "../controller/dash.js";
import searchorder from "../controller/recentorderSearch.js";

const router = Router();

router.get("/", showDashboard);
router.get("/search",searchorder);

export default router;
