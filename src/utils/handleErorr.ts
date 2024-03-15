import { Response } from "express";

export const handleError = (res: Response, error: unknown) => {
    res.status(500).json({ error });
};