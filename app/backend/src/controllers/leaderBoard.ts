import { Request, Response } from 'express';
import LeaderBoardService from '../services/LeaderBoard';

const leaderBoardService = new LeaderBoardService();

export const homeBoard = async (_req: Request, res: Response) => {
  const response = await leaderBoardService.home();
  return res.status(200).json(response);
};

export const awayBoard = async (_req: Request, res: Response) => {
  const response = await leaderBoardService.away();
  return res.status(200).json(response);
};

export const allMatchesBoard = async (_req: Request, res: Response) => {
  const response = await leaderBoardService.allMatches();
  return res.status(200).json(response);
};
