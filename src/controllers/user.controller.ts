import { RequestHandler } from 'express';
import * as bcrypt from 'bcryptjs';

import User from '../models/user.model';
import { validateUser } from '../services/validation.service';

export const list: RequestHandler = async (req, res, next) => {
  try {
    const domain = req.query.domain;
    const users = await User.find(domain ? {domain} : {});
    return res.json(users);
  } catch ( error ) {
    return next(error);
  }
};

export const create: RequestHandler = async (req, res, next) => {
  // Validate request body
  const { error } = validateUser(req.body);
  if (error) { return res.status(400).send(error.details[0].message); }

  // Check if the user with the name already exists -
  // additional to DB indexes definitions - need to send user friendly message
  const nameExist = await User.findOne({username: req.body.username});
  if (nameExist) { return res.status(400).send('The user already exists'); }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);

  const newUser = new User({
    email: req.body.email,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    password: hashedPassword,
    username: req.body.username
  });

  try {
    const user = await newUser.save();
    return res.json(user);
  } catch ( error ) {
    return next(error);
  }
};

export const one: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const item = await User.findById(id);
    return res.json(item);
  } catch ( error ) {
    return next(error);
  }
};

export const update: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const newItem = req.body;
    const { ...updateData } = newItem;
    const updated = await User.findByIdAndUpdate(id, updateData, { new: true });
    return res.json(updated);
  } catch ( error ) {
    return next(error);
  }
};

export const remove: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    await User.remove(id);
    return res.json('removed');
  } catch ( error ) {
    return next(error);
  }
};
