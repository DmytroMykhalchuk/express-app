import { HydratedDocument } from "mongoose";
import connectDB from "../utils/connectDB";
import User from "../models/User";
import { UserDocument, UserSchema } from "../types/userTypes";
class UserService {
    async getUsers() {
        await connectDB();

        const users: UserDocument[] = await User.find();

        return users;
    };

    async createDefaultUser() {
        await connectDB();
        const userModel: HydratedDocument<UserSchema> = new User({
            name: 'name',
            email: 'email@email.com',
            googleId: '3252',
            picture: 'https://',
            locale: 'uk',
        });

        const user = await userModel.save();


        return user;
    };

    async getUser(userId: string) {
        await connectDB();
        const user = await User.findById(userId);
    }
}

export default new UserService();