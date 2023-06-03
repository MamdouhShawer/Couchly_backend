import { Router } from "express";
import userForm from "../controller/addU.js";

const router = Router();

router.post("/", userForm);

export default router;
