import { Router } from 'express';
import * as teamsController from '../controllers/teamsController';

const teamsRouter = Router();

teamsRouter.get('/teams', teamsController.allTeamsController);
teamsRouter.get('/teams/:id', teamsController.teamsById);

export default teamsRouter;
