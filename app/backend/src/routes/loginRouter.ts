import { Router } from 'express';
import login from '../controllers/loginController';

const loginRouter = Router();

loginRouter.get('/ping', login);
// loginRouter.get('/login', loginController);
// loginRouter.post('/login/validate', validateLogin, loginController);

export default loginRouter;
