import { Router } from "express";
import UserController from "../Controllers/UserController";
const routes = Router();

routes.get("/login", UserController.Login);
routes.post("/register",UserController.Register);
export default routes;