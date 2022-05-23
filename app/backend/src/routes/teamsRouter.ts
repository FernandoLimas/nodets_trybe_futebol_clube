import { Router } from 'express';
import teamsController from '../controllers/teamsController';

const teamsRouter = Router();

teamsRouter.get('/teams', teamsController);

export default teamsRouter;
