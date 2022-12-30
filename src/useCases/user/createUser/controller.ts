import { Request, Response } from "express";
import { CreateUserUseCase } from ".";

export class CreateUserController {
  
  async handle(req: Request, res: Response) {

    const { email, name, password } = req.body

    const createUserUseCase = new CreateUserUseCase();

    const response = await createUserUseCase.execute({
      email,
      name,
      password
    })

    if (response.erro) {
      return res.status(400).json(response)
    }

    return res.status(201).json(response)

  }

}