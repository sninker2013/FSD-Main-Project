import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { friendSchema } from "../validations/friendValidation";
import * as friendsController from "../controllers/friendsController";

const router: Router = express.Router();

router.get("/friends", validateRequest({ query: friendSchema }),
    friendsController.getAllFriends);

router.get("/friends/:friendUserName", validateRequest({ params: friendSchema }),
    friendsController.getFriendByUserName);

router.get("/friends/of/:userName", validateRequest({ params: friendSchema }),
    friendsController.getFriendsByUserName);

router.post("/friends", validateRequest({ body: friendSchema }),
    friendsController.addFriendByUserName);

router.put("/friends/:userId/:friendId", validateRequest({ body: friendSchema }),
    friendsController.updateFriendFavourite);

router.delete("/friends/:userId/:friendId", validateRequest({ params: friendSchema }),
    friendsController.deleteFriend);

export default router;