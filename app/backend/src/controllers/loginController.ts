import { Request, Response } from 'express';

const ping = (req: Request, res: Response) => {
  res.json('pong');
};

export default ping;
