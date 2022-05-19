import * as joi from 'joi';

const validateLogin = joi.object({
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
}).messages({
  'string.min': 'Incorrect email or password',
  'string.required': 'All fields must be filled',
  'string.empty': 'All fields must be filled',
  'string.email': 'Incorrect email or password',

});

export default validateLogin;
