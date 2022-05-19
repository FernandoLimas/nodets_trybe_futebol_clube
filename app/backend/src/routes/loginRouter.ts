import { Router } from 'express';
import login from '../controllers/loginController';

const loginRouter = Router();

loginRouter.get('/ping', login);
// loginRouter.post('/login', validateLogin, loginController);

export default loginRouter;
