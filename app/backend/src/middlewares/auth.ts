import { Request, Response, NextFunction } from 'express';
import * as JWT from 'jsonwebtoken';
import { readFileSync } from 'fs';

const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    const secretKey = readFileSync('jwt.evaluation.key', 'utf-8');

    if (req.headers.authorization) {
      const [, token] = req.headers.authorization;

      // try {
      const decoded = JWT.verify(token, secretKey as string);

      if (decoded) {
        success = true;
      }
      // } catch (error) {}
    }
    if (success) {
      next();
    } else {
      res.status(403).json({ error: 'Não autorizado.' });
    }
  },
};

export default Auth;
