import { RequestHandler } from 'express';
import * as joi from 'joi';

const schemaLogin = joi.object({
  email: joi.string().email().not().empty()
    .required(),
  password: joi.string().min(7).not().empty()
    .required(),
}).messages({
  'string.min': 'Incorrect email or password',
  'string.required': 'All fields must be filled',
  'string.empty': 'All fields must be filled',
  'string.email': 'Incorrect email or password',

});

const validateLogin: RequestHandler = (req, res, next) => {
  const login = req.body;

  const { error } = schemaLogin.validate(login);
  if (error) return next(error);

  return next();
};

export default { validateLogin };
