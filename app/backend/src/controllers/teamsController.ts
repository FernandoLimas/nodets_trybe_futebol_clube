import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export const allTeamsController = async (req: Request, res: Response) => {
  const allTeams = await TeamsService.Teams();

  res.status(200).json(allTeams);
};

export const teamsById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const getById = await TeamsService.TeamsById(id);

  res.status(200).json(getById);
};
