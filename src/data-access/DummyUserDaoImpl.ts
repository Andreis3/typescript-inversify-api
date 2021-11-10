import { injectable } from 'inversify';
import IUserDAO from '../interfaces/data-access/IUserDao';
import User from '../models/User';

export const user1 = new User('1', 'John');
export const user2 = new User('2', 'Kate');

@injectable()
export default class DummyUserDaoImpl implements IUserDAO<User, string> {
    async create(instance: User): Promise<string> {
        return Promise.resolve(user1.id);
    }

    async findAll(start: number, count: number): Promise<Array<User>> {
        // return Promise.reject(new Error('mistakes were made'))
        return Promise.resolve([user1, user2]);
    }

    async findById(key: string): Promise<User> {
        return Promise.resolve(user1);
    }

    setNewUserPassword(userID: string, newPassword: string): void {
        // code for changing the password
    }
}
