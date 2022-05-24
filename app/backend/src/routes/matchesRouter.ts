import { Router } from 'express';
import * as matchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/matches', matchesController.getFilterQuery);
matchesRouter.get('/matches', matchesController.allMatchesController);

export default matchesRouter;
