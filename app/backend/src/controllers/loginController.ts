import { Request, Response } from 'express';
import userService from '../services/userServices';

export const ping = (req: Request, res: Response) => {
  res.json('pong');
};

export const loginController = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  if (email && password) {
    const login = await userService.login(email, password);

    return res.status(200).json(login);
  }

  return res.status(400).json({
    message: 'Incorrect email or password',
  });
};
