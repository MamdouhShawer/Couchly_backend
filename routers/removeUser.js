import { Router } from "express";
import collectFunctions from "../controller/Removeuser.js";
import searchUser from "../controller/searchUser.js";

const router = Router();

router.get("/", collectFunctions.paging);

// Add the route for deleteUser
router.delete("/delete/:id", collectFunctions.deleteUser);
router.get("/search", searchUser);
export default router;
