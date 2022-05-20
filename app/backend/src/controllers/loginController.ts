import { Request, Response } from 'express';
import { readFile } from 'fs/promises';
import * as JWT from 'jsonwebtoken';
import userService from '../services/userServices';

export const ping = (req: Request, res: Response) => {
  res.json('pong');
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const login = await userService.login(email, password);
  if (!login) return res.status(401).json({ message: 'User not found' });

  return res.status(200).json(login);
};

interface ILogin {
  data: string;
}

export const ValidateLogin = async (req: Request, res: Response) => {
  const token = req.headers.authorization;
  console.log(token);

  if (!token) return res.status(400).json({ message: 'Token not found' });
  const secretKey = await readFile('jwt.evaluation.key', 'utf-8');
  const decoded = JWT.verify(token, secretKey) as ILogin;

  if (decoded.data) {
    return res.status(200).json(decoded.data);
  }
};
