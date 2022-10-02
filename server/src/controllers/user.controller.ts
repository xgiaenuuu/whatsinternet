import * as express from 'express';
import Controller from './_base.controller';
import User from '../domain/user.model';
 
export default class UserController implements Controller {
  public path = '/users';
  public router = express.Router();
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.get(this.path + "/:userId", this.getUserById);
    this.router.post(this.path, this.createUser);
  }
 
  getAllUsers = (request: express.Request, response: express.Response) => {
    let users = User.findAll();
    response.send(users);
  }

  getUserById = (request: express.Request, response: express.Response) => {
    let user = User.findByPk(request.params.version);
    response.send(user);
  }
 
  createUser = (request: express.Request, response: express.Response) => {
    const user: User = request.body;

    response.send(
        User.create({
            username: user.username,
            email: user.email,
            password: user.password
        }
    ));
  }
}


