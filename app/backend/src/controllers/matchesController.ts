import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

const allMatchesController = async (_req: Request, res: Response) => {
  const allMatches = await MatchesService.MatchesAll();

  res.status(200).json(allMatches);
};

export default allMatchesController;
