import { Router, Request, Response } from 'express';

const weaponRouter = Router()

weaponRouter.get('/', (req: Request, res: Response) => {
    res.send("Hello weapon!")
})

export default weaponRouter;