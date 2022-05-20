import { Router } from 'express';
import validateLogin from '../middlewares/validateSchema';
import * as login from '../controllers/loginController';
// import Auth from '../middlewares/auth';

const loginRouter = Router();

loginRouter.get('/ping', login.ping);
loginRouter.post('/login', validateLogin, login.loginController);
loginRouter.get('/login/validate', login.ValidateLogin);
// loginRouter.post('/login/validate', validateLogin, loginController);

export default loginRouter;
