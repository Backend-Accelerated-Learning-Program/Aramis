import { Express, NextFunction, Request, Response } from "express";

export const ERROR_TYPES = {
  internalError: {
    code: 500,
    message: "Internal Error"
  },
  notFoundError:  {
    code: 404,
    message: "Not found"
  },
  authError:  {
    code: 401,
    message: "Auth Error"
  },
  badRequestError: {
    code: 400,
    message: "Bad Request"
  }
}


export const errorHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  console.error("This is the error: ", error.message,)
  if(error.message == ERROR_TYPES.internalError.message){
    res.status(ERROR_TYPES.internalError.code).send({
      errorcode: ERROR_TYPES.internalError.code,
      message: ERROR_TYPES.internalError.message
    });
  }
  if(error.message == ERROR_TYPES.notFoundError.message){
    res.status(ERROR_TYPES.notFoundError.code).send({
      errorcode: ERROR_TYPES.notFoundError.code,
      message: ERROR_TYPES.notFoundError.message
    });
  }
  if(error.message == ERROR_TYPES.badRequestError.message){
    res.status(ERROR_TYPES.badRequestError.code).send({
      errorcode: ERROR_TYPES.badRequestError.code,
      message: ERROR_TYPES.badRequestError.message
    });
  }

  res.send(error.message)
}