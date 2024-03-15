import { Document } from "mongoose";

export type UserSchema = {
    name: string;
    email: string;
    googleId: string;
    picture: string;
    locale: string;
};

export type UserMethods = {
    userName(): string;
};

export type UserDocument = UserSchema & Document;