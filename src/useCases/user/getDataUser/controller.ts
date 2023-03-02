import { Request, Response } from 'express'
import { GetDataUserUseCase } from '.'



export class GetDataUserController {

  async handle(req: Request, res: Response) {

    const { id } = req.params

    const getDataUserUseCase = new GetDataUserUseCase()

    const response = await getDataUserUseCase.execute(id)

    return res.status(201).json(response)

  }

}