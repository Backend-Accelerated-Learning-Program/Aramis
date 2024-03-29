import { NextFunction, Request, Response } from 'express'
import PlayerModel from '../models/PlayerModel'
import { ERROR_TYPES } from '../middleware/errorHandler'


export const post = async (req: Request, res: Response) => {
  const data = req.body;
  const player = new PlayerModel(data)
  const doc = await player.save();
  res.send(doc);
}

export const get = async (req: Request, res: Response, next: NextFunction) => {
  try{
    const data = await PlayerModel.find({});
    // const data: [] = [];
    if(!data){
      throw new Error(ERROR_TYPES.internalError.message)
      // res.status(500).send({status: 500, message: "Internal Server Error"})
    }

    if(data.length === 0) {
      throw new Error(ERROR_TYPES.notFoundError.message)
    }
    res.status(200).send(data);
  }
  catch(error){
    next(error)
  }
}

export const getById = async (req: Request, res: Response, next: NextFunction) => {
 
  try{
    const { _id } = req.params;
    const data = await PlayerModel.findById({ _id }).catch(err => {
      throw new Error(ERROR_TYPES.badRequestError.message)
    })

    if(!data){
      throw new Error(ERROR_TYPES.notFoundError.message)
      // res.status(500).send({status: 500, message: "Internal Server Error"})
    }

  
  }
  catch(error){
    next(error)
  }
}


export const put = async (req: Request, res: Response, next: NextFunction) => {
  const data = req.body;

  const filter = { _id: data._id };
  const options = { "new": true };
  const doc = await PlayerModel.findOneAndUpdate(filter, data, options);
  res.send(doc);  
}


