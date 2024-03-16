import { Request, Response } from 'express'
import PlayerModel from '../models/PlayerModel'

export const post = (req: Request, res: Response) => {
  const player = req.body
  res.send(player)
}

export const get = async (req: Request, res: Response) => {
  const data = await PlayerModel.find({});
  res.send(data);
}

export const getById = async (req: Request, res: Response) => {
  const { _id } = req.params;
  const data = await PlayerModel.findById({_id: _id});
  res.status(200).send(data);
}