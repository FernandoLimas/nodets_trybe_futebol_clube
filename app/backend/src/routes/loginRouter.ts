import { Router } from 'express';
import loginController from '../controllers/';

const loginRouter = Router();

loginRouter.post('/login', validateLogin, loginController);

export default loginController;
