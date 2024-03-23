import { Router, Request, Response } from 'express';
import { post, get, getById, put } from '../controller/playerController';

const playerRouter = Router()

playerRouter.get('/', get)
playerRouter.get('/:_id', getById)

playerRouter.post('/', post)
playerRouter.put("/", put);


export default playerRouter;