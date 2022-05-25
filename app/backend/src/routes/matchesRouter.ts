import { Router } from 'express';
import * as matchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/matches', matchesController.getFilterQuery);
matchesRouter.get('/matches', matchesController.allMatchesController);
matchesRouter.post('/matches', matchesController.createMatches);
matchesRouter.patch('/matches/:id/finish', matchesController.finishMatch);
matchesRouter.patch('/matches/:id', matchesController.updateScore);

export default matchesRouter;
