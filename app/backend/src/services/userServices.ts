import { readFile } from 'fs/promises';
import * as JWT from 'jsonwebtoken';
// import * as bcrypt from 'bcrypt';
import Users from '../database/models/Users';

export default class LoginService {
  public static async login(email: string, _password: string) {
    const hasUser = await Users.findOne({ where: { email },
      attributes: { exclude: ['password'] } });
    if (!hasUser) {
      return false;
    }
    // const hashValid = await bcrypt.compare(password, hasUser.password);
    // if (!hashValid) {
    //   return false;
    // }

    const userProp = { id: hasUser.id,
      username: hasUser.username,
      email: hasUser.email,
      role: hasUser.role,
    };

    const secretKey = await readFile('jwt.evaluation.key', 'utf-8');

    const token = JWT.sign({ data: hasUser.role }, secretKey, { expiresIn: '2h' });

    return { user: userProp,
      token,
    };
  }
}
