import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoard';

const leaderBoardService = new LeaderBoardService();

export default class LeaderBoardController {
  public static homeBoard = async (_req: Request, res: Response) => {
    const result = await leaderBoardService.home();
    return res.status(200).json(result);
  };

  public static awayBoard = async (_req: Request, res: Response) => {
    const result = await leaderBoardService.away();
    return res.status(200).json(result);
  };

  public static allMatchesBoard = async (_req: Request, res: Response) => {
    const result = await leaderBoardService.allMatches();
    return res.status(200).json(result);
  };
}
