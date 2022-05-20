import { Router } from 'express';
import schemaLogin from '../schemas/validateLogin';
import * as login from '../controllers/loginController';
// import Auth from '../middlewares/auth';

const loginRouter = Router();

loginRouter.get('/ping', login.ping);
loginRouter.post('/login', schemaLogin, login.loginController);
loginRouter.get('/login/validate', login.ValidateLogin);
// loginRouter.post('/login/validate', validateLogin, loginController);

export default loginRouter;
