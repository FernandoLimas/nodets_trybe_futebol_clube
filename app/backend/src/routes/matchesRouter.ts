import { Router } from 'express';
import matchesController from '../controllers/matchesController';

const matchesRouter = Router();

matchesRouter.get('/matches', matchesController);

export default matchesRouter;
