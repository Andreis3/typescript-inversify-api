import { Container } from 'inversify';
import TYPES from './constants/Types';
import IUserService from './interfaces/services/IUserService';
import DummyUserService from './services/user/DummyUserService';
import './controller/UserController';
import IUserDAO from './interfaces/data-access/IUserDao';
import DummyUserDaoImpl from './data-access/DummyUserDaoImpl';
import User from './models/User';

export default class MyContainer {
    private readonly _container: Container;

    constructor() {
        this._container = new Container();
    }

    getContainer(): Container {
        this._container.bind<IUserService>(TYPES.UserService).to(DummyUserService).inSingletonScope();
        this._container.bind<IUserDAO<User, string>>(TYPES.UserDAO).to(DummyUserDaoImpl).inSingletonScope();
        return this._container;
    }
}
