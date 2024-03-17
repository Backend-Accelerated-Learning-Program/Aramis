import express, { Express, Request, Response } from "express";
import cors from "cors";
import { itemRouter, playerRouter, weaponRouter } from './router'
import { errorHandler } from "./middleware/errorHandler";

const app: Express = express();

app.use(cors({origin: "*"}));
app.use(express.json());

app.use('/player', playerRouter);
app.use('/item', itemRouter);
app.use('/weapon', weaponRouter);

app.get('/', (req: Request, res: Response) => {
  res.send("Hello")
});


app.use(errorHandler);

export default app;