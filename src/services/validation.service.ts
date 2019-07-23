import * as Joi from '@hapi/joi';
import { IUserModel } from '../models/user.model';

export const validateUser = (data: IUserModel) => {
  const schema = {
    firstname: Joi.string()
      .min(4)
      .required(),
    lastname: Joi.string()
      .min(4)
      .required(),
    password: Joi.string()
      .min(6)
      .max(1024)
      .required(),
    username: Joi.string()
      .min(6)
      .required()
  };

  return Joi.validate(data, schema);
};

export const validateLogin = (data: any) => {
  const schema = {
    password: Joi.string()
      .min(6)
      .max(1024)
      .required(),
    username: Joi.string()
      .min(6)
      .required()
  };
  return Joi.validate(data, schema);
};
