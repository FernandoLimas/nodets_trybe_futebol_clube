import { Request, Response, NextFunction } from 'express';
import schemaLogin from '../schemas/loginSchema';

export default async (req: Request, _res: Response, next: NextFunction) => {
  try {
    await schemaLogin.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};
// export default validateSchema;
