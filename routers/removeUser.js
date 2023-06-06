import { Router } from "express";
import collectFunctions from "../controller/Removeuser.js";

const router = Router();

router.get("/", collectFunctions.paging);

// Add the route for deleteUser
router.delete("/delete/:id", collectFunctions.deleteUser);

export default router;
