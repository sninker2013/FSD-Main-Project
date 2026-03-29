import express, {Router} from "express";
//import { validateRequest } from "../middleware/validate";
//import { userSchema } from "../validations/userValidation";
import * as friendsController from "../controllers/friendsController";

const router: Router = express.Router();

router.get("/friends", /*validateRequest(friendSchema),*/
    friendsController.getAllFriends);

router.get("/friends/:friendUserName", /*validateRequest(friendSchema),*/
    friendsController.getFriendByUserName);

router.get("/friends/of/:userName", /*validateRequest(friendSchema),*/
    friendsController.getFriendsByUserName);

router.post("/friends", /*validateRequest(friendSchema),*/ 
    friendsController.addFriendByUserName);

router.put("/friends/:userId/:friendId", /*validateRequest(friendSchema),*/
    friendsController.updateFriend);

router.delete("/friends/:userId/:friendId", /*validateRequest(friendSchema),*/
    friendsController.deleteFriend);

export default router;