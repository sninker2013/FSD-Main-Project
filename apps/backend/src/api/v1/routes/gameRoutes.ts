import express, { Router } from 'express';
import * as gameController from '../controllers/gameController';

const router: Router = express.Router();

router.get('/', gameController.getAllGames);

export default router;
