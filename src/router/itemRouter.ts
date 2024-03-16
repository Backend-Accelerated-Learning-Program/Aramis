import { Router, Request, Response } from 'express';

const itemRouter = Router()

itemRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello item!")
})

export default itemRouter;