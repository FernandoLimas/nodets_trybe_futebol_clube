import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

const allTeamsController = async (req: Request, res: Response) => {
  const allTeams = await TeamsService.Teams();

  res.status(200).json(allTeams);
};

export default allTeamsController;
