import UserService from '../services/UserService';
import { handleError } from '../utils/handleErorr';
import { Request, Response } from 'express';

class UserController {
    async getUser(req: Request, res: Response) {
        try {
            const users = await UserService.getUsers();
            res.status(200)
                .send(users);
        } catch (e) {
            handleError(res, e);
        }
    };
};

export default new UserController();