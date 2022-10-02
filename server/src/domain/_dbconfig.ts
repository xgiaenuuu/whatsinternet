import { Sequelize } from 'sequelize';
require('dotenv').config();

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.DB,
});