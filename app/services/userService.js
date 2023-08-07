import User from "../../models/models.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import ApiError from './../../error/ApiError.js';

class UserService {

    generateJwt(id, email) {
        return jwt.sign(
            {id, email},
            process.env.SECRET_KEY,
            {expiresIn: "1d"},
        );
    }
}

export default new UserService;