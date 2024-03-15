import { Request, Response } from "express";
import connectDB from "../utils/connectDB";
import User from "../models/User";
import { handleError } from "../utils/handleErorr";

export const getUser = async (req: Request, res: Response) => {
    try {
        await connectDB();
        const users = await User.find();
        res.status(200)
            .send(users);
    } catch (e) {
        handleError(res,e);
    }
};