import { Request, Response, Router } from 'express';
import connectDB from '../utils/connectDB';
import User from '../models/User';
import UserController from '../controllers/UserController';

const router = Router();

router.get("/users", UserController.getUser);

export default router;
