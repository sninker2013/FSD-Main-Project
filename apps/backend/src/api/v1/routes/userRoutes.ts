import express, { Router } from 'express';
import { validateRequest } from "../middleware/validate"
import { userSchema } from "../validations/userValidation"
import * as userController from '../controllers/userController';

const router: Router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/:userName', userController.getUserByUserName);
router.post('/', validateRequest(userSchema), userController.createUser);
router.delete('/:id', userController.deleteUser);

export default router;