import * as joi from 'joi';

const errorField = 'Incorrect email or password';
const empty = 'All fields must be filled';

const schemaLogin = joi.object({
  email: joi.string().email().required().messages({
    'string.email': errorField,
    'any.required': empty,
    'string.empty': empty,
  }),
  password: joi.string().min(6).required().messages({
    'string.min': errorField,
    'any.required': empty,
    'string.empty': empty,
  }),
});

export default schemaLogin;
