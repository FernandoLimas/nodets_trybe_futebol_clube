import { NextFunction, Request, Response } from 'express';
import { JsonWebTokenError } from 'jsonwebtoken';

import HttpException from '../exceptions/http';

export default function errorHandler(
  error:HttpException,
  _req: Request,
  res: Response,
  _next: NextFunction,
) {
  if (error instanceof JsonWebTokenError) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  if (error.details) {
    const [err] = error.details;
    const { message, type } = err;
    if (type === 'string.min' || type === 'string.email') {
      return res.status(401).json({ message });
    }
    return res.status(400).json({ message });
  }

  return res.status(500).json(error.message);
}
