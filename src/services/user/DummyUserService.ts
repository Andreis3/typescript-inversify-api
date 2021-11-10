import { inject, injectable } from 'inversify';
import User from '../../models/User';
import TYPE from '../../constants/Types';
import IUserDao from '../../interfaces/data-access/IUserDao';
import IUserService from '../../interfaces/services/IUserService';

type UserDaoType = IUserDao<User, string>;

@injectable()
export default class DummyUserService implements IUserService {
    private readonly _userDAO: UserDaoType;

    public constructor(@inject(TYPE.UserDAO) _userDAO: UserDaoType) {
        this._userDAO = _userDAO;
    }

    async findById(id: string): Promise<User> {
        return this._userDAO.findById(id);
    }

    async findAll(start: number, count: number): Promise<Array<User>> {
        return this._userDAO.findAll(start, count);
    }

    async create(user: User): Promise<string> {
        return this._userDAO.create(user);
    }
}
