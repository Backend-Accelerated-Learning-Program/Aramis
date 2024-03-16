import { Router, Request, Response } from 'express';
import { post, get, getById } from '../controller/playerController';

const playerRouter = Router()

playerRouter.post('/', post)
playerRouter.get('/', get)
playerRouter.get('/:_id', getById)

export default playerRouter;