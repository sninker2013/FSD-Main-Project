import express, { Router } from 'express';
import * as reviewController from '../controllers/reviewController';

const router: Router = express.Router();

router.get('/', reviewController.getAllReviews);
router.post('/', reviewController.createReview);

export default router;