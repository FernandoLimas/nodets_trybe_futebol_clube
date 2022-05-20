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

const validateLogin: RequestHandler = async (req, res, next) => {
  try {
    await schemaLogin.validateAsync(req.body);
    return next();
  } catch (error) {
    return next(error);
  }
};

export default validateLogin;
