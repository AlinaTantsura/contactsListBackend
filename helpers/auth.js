import { Users } from "../models/users.js";
import HttpError from "./HttpError.js";
import 'dotenv/config';
import jwt from 'jsonwebtoken'

const { SECRET_KEY } = process.env;

export const auth = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
        next(HttpError(401, "Not authorized"))
    };
    
    try {
        const { id } = jwt.verify(token, SECRET_KEY);
        const user = await Users.findById(id);
        if (!user || !user.token || user.token !== token) {
            next(HttpError(401, "Not authorized"))
        }
        req.user = user;
        next();
    }catch {
        next(HttpError(401, "Not authorized"))
    }
}