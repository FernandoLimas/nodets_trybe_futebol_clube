import { Router } from 'express';
import * as login from '../controllers/loginController';
import Auth from '../middlewares/auth';

const loginRouter = Router();

loginRouter.get('/ping', login.ping);
loginRouter.get('/login', Auth.private, login.loginController);
// loginRouter.post('/login/validate', validateLogin, loginController);

export default loginRouter;
