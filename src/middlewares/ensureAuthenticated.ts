import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { Unauthorized } from "../errors/Unauthorized";


export function ensureAuthenticated(
  req: Request,
  response: Response,
  next: NextFunction
) {


  const authToken = req.headers.authorization

  if (!authToken) {

    throw new Unauthorized("Token is missing")

  }

  const [, token] = authToken.split(" ")

  try {
    verify(token, "4188e77f-4ab0-4c02-ab61-835392c")

    return next()

  } catch (error) {
    throw new Unauthorized("Token is invalid")
  }

}