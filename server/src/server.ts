import App from './app';
import UserController from './controllers/user.controller';
require('dotenv').config()
const appPort: number = Number(process.env.PORT);

const app = new App(
  [
    new UserController(),
  ],
  appPort,
);
app.listen();
