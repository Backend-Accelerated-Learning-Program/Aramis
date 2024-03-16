import express, { Express, Request, Response } from "express";
import { itemRouter, playerRouter, weaponRouter } from './router'

const app: Express = express();

app.use(express.json());

app.use('/player', playerRouter);
app.use('/item', itemRouter);
app.use('/weapon', weaponRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello")
})

export default app;