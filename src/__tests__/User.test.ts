import { soma } from "../soma";
import request from "supertest";
import app from "../app";
import UserSchema from "../Schemas/UserSchema";

it("Primeira requisição na api",async() => {
    const user = await UserSchema.create({
        email: "joao",
        password: "teste"
    })
    const response = await request(app).post("/register").send(user);
    expect(response.statusCode).toBe(200);
})