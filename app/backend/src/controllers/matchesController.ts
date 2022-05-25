import { Request, Response, NextFunction } from 'express';
import MService from '../services/MatchesService';

export const allMatchesController = async (_req: Request, res: Response) => {
  const allMatches = await MService.MatchesAll();

  res.status(200).json(allMatches);
};

const typeString = (value: string) => {
  const validate = Number.isNaN(Number(value));
  if (!validate) { return Number(value); }
  if (value === 'true') { return true; }
  if (value === 'false') { return false; }
  return value;
};

export const getFilterQuery = async (req: Request, res: Response, next: NextFunction) => {
  const { query } = req;
  const keys = Object.keys(query) as string[];
  if (keys.length === 0) { return next(); }
  if (keys.length === 1) {
    const key = keys[0];
    const value = typeString(query[key] as string);
    const allMatches = await MService.getFilterQuery(key, value);
    return res.status(200).json(allMatches);
  }
  let allMatches = await MService.MatchesAll() as any[];
  keys.forEach((key) => {
    const value = typeString(query[key] as string);
    allMatches = allMatches.filter((element) => {
      const elementValue = element[key];
      return elementValue === value;
    });
  });
  return res.status(200).json(allMatches);
};

export const createMatches = async (req: Request, res: Response) => {
  const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;
  if (homeTeam === awayTeam) {
    return res.status(401).json({
      message: 'It is not possible to create a match with two equal teams' });
    const createM = await MService.createMatches(homeTeam, homeTeamGoals, awayTeam, awayTeamGoals);
    if (!createM) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    return res.status(201).json(createM);
  }
};
