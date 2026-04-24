import express, {Router} from "express";
import { validateRequest } from "../middleware/validate";
import { friendSchema } from "../validations/friendValidation";
import * as friendsController from "../controllers/friendsController";

const router: Router = express.Router();

router.get("/:userId", friendsController.getFriendsForUser);

router.put("/:userId/:friendId", validateRequest(friendSchema),
    friendsController.updateFriendFavourite);

export default router;