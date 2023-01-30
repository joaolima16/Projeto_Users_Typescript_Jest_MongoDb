import { Request, Response } from "express";
import UserSchema from "../Schemas/UserSchema";

type User = {
    email: string;
    password: string;
}
class UserController {
    public async Login(req: Request, res: Response) {
        const user: User = req.body
        const users = await UserSchema.findOne(user);
        return res.json(users);

    }
    public async Register(req: Request, res: Response) {
        const user: User = req.body;
        console.log(user.email);
        console.log(req.body);
        const new_user = await UserSchema.create(user);
        return res.status(200).json({ msg: "Usuário criado", user: new_user });
    }
}
export default new UserController();