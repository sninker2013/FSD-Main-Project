import express, { Router } from 'express';
import { validateRequest } from "../middleware/validate"
import { userSchema } from "../validations/userValidation"
import { findOrCreateUser } from '../middleware/findOrCreateUser';
import * as userController from '../controllers/userController';

const router: Router = express.Router();

router.get('/', userController.getAllUsers);
router.get('/current', findOrCreateUser, userController.getCurrentUser);
router.put('/current/status', findOrCreateUser, userController.updateCurrentUserStatus);
router.post('/', validateRequest(userSchema), userController.createUser);
router.get('/:userName', userController.getUserByUserName);
router.delete('/:id', userController.deleteUser);

export default router;