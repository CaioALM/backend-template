import { Router } from "express"
import { controller }  from "../controllers/theController.js";
import validateSchema from "../middlewares/validateSchema.js";
import theSchema from "../schemas/theSchema.js";

const theRouter = Router();

theRouter.post("/route", validateSchema(theSchema), controller)

export default theRouter;


