import { Request, Response } from "express";
import { GetPlayerByIdUseCase } from ".";


export class GetPlayerByIdController {
  
  async handle(req: Request, res: Response) {
    
    const { id } = req.params;
    
    const getPlayerById = new GetPlayerByIdUseCase()

    const player = await getPlayerById.execute(id)

    return res.status(200).json(player)

  }

}