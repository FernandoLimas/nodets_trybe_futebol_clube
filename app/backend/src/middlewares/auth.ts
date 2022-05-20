import { Request, Response, NextFunction } from 'express';
import * as JWT from 'jsonwebtoken';
import { readFile } from 'fs/promises';

const Auth = {
  private: async (req: Request, res: Response, next: NextFunction) => {
    let success = false;
    const secretKey = await readFile('./jwt.evaluation.key', 'utf-8');

    if (req.headers.authorization) {
      const [authType, token] = req.headers.authorization.split(' ');
      if (authType === 'Bearer') {
        // try {
        const decoded = JWT.verify(token, secretKey as string);

        console.log(decoded);

        if (decoded) {
          success = true;
        }
        // } catch (error) {}
      }
    }
    if (success) {
      return next();
    }
    res.status(403).json({ error: 'Não autorizado.' });
  },
};

export default Auth;
