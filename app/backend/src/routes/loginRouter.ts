import { Router } from 'express';
import * as login from '../controllers/loginController';
import Auth from '../middlewares/auth';

const loginRouter = Router();

loginRouter.get('/ping', Auth.private, login.ping);
loginRouter.post('/login', login.loginController);
// loginRouter.post('/login/validate', validateLogin, loginController);

export default loginRouter;
