import { Router, Request, Response } from 'express';
import { post, get, getById, put } from '../controller/itemController';

const itemRouter = Router()


itemRouter.get('/', get)
itemRouter.get('/:_id', getById)

itemRouter.post('/', post)
itemRouter.put("/", put);

export default itemRouter;