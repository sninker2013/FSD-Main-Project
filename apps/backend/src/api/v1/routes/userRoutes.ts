import express, {Router} from "express";
//import { validateRequest } from "../middleware/validate";
//import { userSchema } from "../validations/userValidation";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.get("/terms", /*validateRequest(userSchema),*/
    userController.getAllUsers);

    router.get("/terms/:id", /*validateRequest(userSchema),*/
        userController.getUserById);

router.post("/terms", /*validateRequest(userSchema),*/ 
    userController.createUser);

router.delete("/terms/:id", /*validateRequest(userSchema),*/
    userController.deleteUser);

export default router;