import { Request, Response } from 'express';
import { ValidationError } from 'joi';

export default function errorHandler(
  err: ValidationError,
  req: Request,
  res: Response,
) {
  if (err.details) {
    const [erro] = err.details;
    const { message, type } = erro;
    if (type === 'string.min' || type === 'string.email') {
      return res.status(401).json({ message });
    }
    return res.status(400).json({ message });
  }

  return res.status(500).json(err);
}
