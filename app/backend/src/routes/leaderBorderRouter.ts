import { Router } from 'express';
import * as leaderBoardController from '../controllers/leaderBoard';

const leaderBoardRouter = Router();

leaderBoardRouter.get('/leaderboard/home', leaderBoardController.homeBoard);
leaderBoardRouter.get('/leaderboard/away', leaderBoardController.awayBoard);
leaderBoardRouter.get('/leaderboard', leaderBoardController.allMatchesBoard);

export default leaderBoardRouter;
