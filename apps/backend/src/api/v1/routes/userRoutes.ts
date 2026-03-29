import express, {Router} from "express";
//import { validateRequest } from "../middleware/validate";
//import { userSchema } from "../validations/userValidation";
import * as userController from "../controllers/userController";

const router: Router = express.Router();

router.get("/users", /*validateRequest(userSchema),*/
    userController.getAllUsers);

    router.get("/users/:name", /*validateRequest(userSchema),*/
        userController.getUserByUserName);

router.post("/users", /*validateRequest(userSchema),*/ 
    userController.createUser);

router.delete("/users/:id", /*validateRequest(userSchema),*/
    userController.deleteUser);

export default router;