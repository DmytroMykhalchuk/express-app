import mongoose, { model } from "mongoose";
import { Schema, Model } from "mongoose";
import { UserMethods, UserSchema } from "../types/userTypes";

mongoose.Promise = global.Promise;


type UserModel = Model<UserSchema, {}, UserMethods>;

const userSchema = new Schema<UserSchema, UserModel, UserMethods>(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        googleId: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true,
        },
        locale: {
            type: String,
            required: true,
        }
    },
);

export default mongoose.model<UserSchema, UserModel>('User', userSchema);