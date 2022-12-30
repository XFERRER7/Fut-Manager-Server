import { Request, Response } from "express";
import { GetTeamUserCase } from "./GetTeamUseCase";


export class GetTeamController {
  
  async handle(req: Request, res: Response) {

    const id = req.params.id

    const getTeam = new GetTeamUserCase()

    const team = await getTeam.execute(id)

    return res.status(200).json(team)

  }

}