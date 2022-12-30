import { Request, Response } from "express";
import { AuthenticateUserUseCase } from ".";


export class AuthenticateUserController {

  async handle(req: Request, res: Response) {

    const { email, password } = req.body

    const authenticateUserUseCase = new AuthenticateUserUseCase()

    const token = await authenticateUserUseCase.execute({
      email,
      password
    })

    return res.status(200).json(token)

  }

}