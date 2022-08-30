import { Router } from "express";
import theRouter  from "./theRouter.js";
 
const router = Router();

router.use(theRouter);

export default router;