import express, {Router} from "express";
//import { validateRequest } from "../middleware/validate";
//import { userSchema } from "../validations/userValidation";
import * as friendsController from "../controllers/friendsController";

const router: Router = express.Router();

router.get("/friends", /*validateRequest(friendSchema),*/
    friendsController.getAllFriends);

    router.get("/friends/:name", /*validateRequest(friendSchema),*/
        friendsController.getFriendByUserName);

router.post("/friends", /*validateRequest(friendSchema),*/ 
    friendsController.createFriend);

router.put("/friends/:id", /*validateRequest(friendSchema),*/
    friendsController.updateFriend);

router.delete("/friends/:id", /*validateRequest(friendSchema),*/
    friendsController.deleteFriend);

export default router;