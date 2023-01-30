import express from 'express';
import routes from './Routes/Routes';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import path from 'path';

require("dotenv").config({path: path.resolve(__dirname, "../.env")});

class App {
    public app: express.Application;
    constructor() {
        this.app = express();
        this.Middlewares();
        this.Routes();
        this.connect();
        console.log(process.env.DATABASE);
    }
    private Routes(): void {
        this.app.use(routes);
    }
    private Middlewares(): void {
        this.app.use(express.json());
    }
    private connect(): void {
        mongoose.connect(`mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@projectcrud.5sxpx3b.mongodb.net/?retryWrites=true&w=majority`)
            .then((response) => { console.log("Banco conectado") })
            .catch((err) => { console.log(err) })
    }
}
export default new App().app;