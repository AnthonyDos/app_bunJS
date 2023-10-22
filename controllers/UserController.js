import UserModel from '../models/UserModel';
import {jwt} from "@elysiajs/jwt";
const Jwt = require('jsonwebtoken');  
import Dico from '../dico/Dico';
require('dotenv').config();


export const create = async({body, set}) => {
    
    if (body) {
       
        const userExist = await UserModel.findOne({ email: body.email });
        if (userExist) {
            set.status = 409;
            return{
                success: false,
                data: null,
                message: Dico.USER_ALREADY_EXIST
            }
        }

        const {email, password} = body;
        const hash = await Bun.password.hash(password);

        const user = new UserModel({
            email: email,
            password: hash
        });

        user.save();
        // const tokenData = {
        //     userId: user._id,
        //     email: user.email
        // }
        //const token = await jwt.sign({morePayload:tokenData});
        

        set.status = 201;
        return{
            success: true,
            message: Dico.SUCCESS_USER_CREATE,
            data: {
                email: email,
                userId: user._id,
                // tokens: jwt({
                //     name: "jwt",
                //     secret: token,
                //     exp: Dico.TOKEN_EXPIRE
                // })
            }
        };
    } else {
        set.status = 400;
        return{
            success: false,
            data: null,
            message: Dico.NOT_VALUES_FORM
        }
    }
}

export const login = async ({body, set}) => {
    const { email, password } = body;
    if (!email || !password) {
        set.status = 400;
        return{
            success: false,
            data: null,
            message: Dico.ERROR_FORM
        }
    }

    try {
        const user = await UserModel.findOne({ email: email });
        if (!user) {
            set.status = 404;
            return{
                success: false,
                data: null,
                message: Dico.USER_NOT_EXIST
            }
        };

        const valid = await Bun.password.verify(password, user.password); 
        if (!valid) {
            set.status = 401;
            return{
                success: false,
                data: null,
                message: Dico.INCORRECT_PASSWORD
            }
        };

        const tokenData = {
            userId: user._id,
            email: user.email
        }

        const token = Jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: Dico.TOKEN_EXPIRE }); 

        set.status = 200;
        return{
            success: true,
            data: {
                userId: user._id,
                tokens: jwt({
                    name: "token",
                    secret: token,
                    exp: Dico.TOKEN_EXPIRE
                })
            },
            message: null
        }
    } catch (error) {
        set.status = 500;
        return{
            success: false,
            data: null,
            message: Dico.INTERNAL_SERVER_ERROR
        }
    };
};

export const getAllUsers = async ({body, set}) => {
    
    try {
        const users = await UserModel.find();
        set.status = 200;
        return{
            success: true,
            data: users,
            message: null
        }
    } catch (error) {
        console.log(error);
        set.status = 500;
        return{
            success: false,
            data: null,
            message: Dico.INTERNAL_SERVER_ERROR
        }
    };
};

export const getUserById = async (id, set) => {
       
    try {
        const user = await UserModel.findById(id);
        if (!user) {
            set.status = 404;
            return{
                success: false,
                data: null,
                message: Dico.USER_NOT_EXIST
            }
        }

        set.status = 200;
        return{
            success: true,
            data: user,
            message: null
        }
    } catch (error) {
        set.status = 500;
        return{
            success: false,
            data: null,
            message: Dico.INTERNAL_SERVER_ERROR
        }
    }
}


export const updateUser = async (req, res) => {
    const userId = req.params._id; 
    const updatedUserData = req.body;

    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: Dico.USER_NOT_EXIST });
        }

        user.set(updatedUserData);
        await user.save();

        res.status(200).json({ message: Dico.SUCCESS_USER_UPDATE, user: user });
    } catch (error) {
        res.status(500).json({ message: Dico.INTERNAL_SERVER_ERROR , error: error});
    }
}

export const deleteUser = async (req, res) => {
    const userId = req.params._id;

    try {
        const user = await UserModel.findById(userId);

        if (!user) {
            return res.status(404).json({ message: Dico.USER_NOT_EXIST });
        }

        await user.deleteOne();
        res.status(200).json({ message: Dico.SUCCESS_USER_DELETE });
    } catch (error) {
        res.status(500).json({ message: Dico.INTERNAL_SERVER_ERROR });
    }
}

