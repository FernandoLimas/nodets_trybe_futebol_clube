import { Request, Response, NextFunction } from 'express';
import MatchesService from '../services/MatchesService';

export const allMatchesController = async (_req: Request, res: Response) => {
  const allMatches = await MatchesService.MatchesAll();

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
    const allMatches = await MatchesService.getFilterQuery(key, value);
    return res.status(200).json(allMatches);
  }
  let allMatches = await MatchesService.MatchesAll() as any[];
  keys.forEach((key) => {
    const value = typeString(query[key] as string);
    allMatches = allMatches.filter((element) => {
      const elementValue = element[key];
      return elementValue === value;
    });
  });
  return res.status(200).json(allMatches);
};
