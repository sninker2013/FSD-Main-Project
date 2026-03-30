import express, { Router } from 'express';
import { validateRequest } from "../middleware/validate"
import { reviewSchema } from "../validations/reviewValidation"
import * as reviewController from '../controllers/reviewController';

const router: Router = express.Router();

router.get('/', reviewController.getAllReviews);
router.post('/', validateRequest(reviewSchema), reviewController.createReview);

export default router;