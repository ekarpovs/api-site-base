import * as Joi from '@hapi/joi';
import { IUserModel } from '../models/user.model';

export const validateUser = (data: IUserModel) => {
  const schema = {
    access: Joi.array(),
    domain: Joi.string(),
    email: Joi.string()
      .min(6)
      .required()
      .email(),
    locked: Joi.boolean(),
    name: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required()
  };

  return Joi.validate(data, schema);
};

export const validateLogin = (data: any) => {
  const schema = {
    name: Joi.string()
      .min(6)
      .required(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required()
  };
  return Joi.validate(data, schema);
};
