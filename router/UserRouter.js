//import server from 'bunrest';
import { Elysia } from "elysia";
import { create, login, getAllUsers, getUserById, updateUser, deleteUser } from "../controllers/UserController";
import {jwt} from "@elysiajs/jwt";
import { cookie } from "@elysiajs/cookie";
require('dotenv').config();


export const routerUSer = new Elysia({ prefix: "/user" }).use(cookie()).use(jwt({
    name: "jwt",
    secret: process.env.JWT_SECRET,
}));
routerUSer.post('/', async ({jwt, cookie, setCookie, params}) => {
    setCookie('auth',await jwt.sign(params), {
        httpOnly: true,
        maxAge: 7 * 86400,
    });
    create;
    return  `Sign in as ${cookie.auth}`;   
});
routerUSer.post('/login', async ({jwt, cookie, setCookie, params}) => {
    setCookie('auth',await jwt.sign(params), {
        httpOnly: true,
        maxAge: 7 * 86400,
    });
     login
    return  `Sign in as ${cookie.auth}`;
});
routerUSer.get("/" , getAllUsers);
routerUSer.get("/:_id",async ({set,jwt, cookie:{auth}, params: {_id}}) => {
    const user = await jwt.verify(auth);

    if(!user){
        set.status = 401;
        throw new Error('Not authorized');
    }
    return getUserById(_id, set);
});
routerUSer.put("/update/:_id",updateUser);
routerUSer.delete('/delete/:_id', deleteUser);
