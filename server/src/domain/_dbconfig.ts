import { Sequelize } from 'sequelize';
 
export const sequelize: Sequelize = new Sequelize("test-db", "user", "pass", {
  dialect: "sqlite",
  host: "./dev.sqlite"
});
 
module.exports = sequelize;