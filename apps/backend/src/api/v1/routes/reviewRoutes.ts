import express, { Router } from 'express';
import { validateRequest } from "../middleware/validate"
import { reviewSchema } from "../validations/reviewValidation"
import * as reviewController from '../controllers/reviewController';
import { findOrCreateUser } from '../middleware/findOrCreateUser';

const router: Router = express.Router();

router.get('/', reviewController.getAllReviews);
router.post('/', findOrCreateUser, validateRequest(reviewSchema), reviewController.createReview);
router.get('/getByUserId', findOrCreateUser, reviewController.getReviewsByUserId)

export default router;