import * as bcrypt from 'bcrypt';
import Users from '../database/models/Users';

export default class LoginService {
  public static async createUser(email: string, password: string) {
    const hasUser = await Users.findOne({ where: { email } });
    if (!hasUser) {
      const hash = bcrypt.hashSync(password, 10);

      const newUser = await Users.create({
        email,
        password: hash,
      });
      return newUser;
    }
    return new Error('Usuário já existe!');
  }

  public static matchPassword(passwordText: string, encrypted: string) {
    return bcrypt.compareSync(passwordText, encrypted);
  }
}
