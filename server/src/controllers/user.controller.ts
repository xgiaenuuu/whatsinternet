import * as express from 'express';
import User from '../interfaces/user.interface';
import Controller from './_base.controller';
import { UserModel } from '../domain/user.model';
 
export default class UserController implements Controller {
  public path = '/users';
  public router = express.Router();
  private userModel = UserModel;
 
  constructor() {
    this.intializeRoutes();
  }
 
  public intializeRoutes() {
    this.router.get(this.path, this.getAllUsers);
    this.router.get(this.path + "/:userId", this.getUserById);
    this.router.post(this.path, this.createUser);
  }
 
  getAllUsers = (request: express.Request, response: express.Response) => {
    let users = UserModel.findAll();
    response.send(users);
  }

  getUserById = (request: express.Request, response: express.Response) => {
    let user = UserModel.findByPk(request.params.version);
    response.send(user);
  }
 
  createUser = (request: express.Request, response: express.Response) => {
    const user: User = request.body;

    response.send(
        UserModel.create({
            id: user.id,
            username: user.username,
            email: user.email,
            password: user.password
        }
    ));
  }
}


