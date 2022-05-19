import * as bcrypt from 'bcrypt';
import { readFile } from 'fs/promises';
import * as JWT from 'jsonwebtoken';
import Users from '../database/models/Users';

export default class LoginService {
  public static async login(email: string, password: string) {
    const hasUser = await Users.findOne({ where: { email } });
    if (!hasUser) {
      return false;
    }
    const hashValid = bcrypt.compareSync(password, hasUser.password);
    if (!hashValid) {
      return false;
    }
    const secretKey = await readFile('jwt.evaluation.key', 'utf-8');

    const token = JWT.sign({ data: hasUser.role }, secretKey, { expiresIn: '2h' });

    return {
      user: { id: hasUser.id,
        username: hasUser.username,
        email: hasUser.email,
        role: hasUser.role,
      },
      token,
    };
  }
}
