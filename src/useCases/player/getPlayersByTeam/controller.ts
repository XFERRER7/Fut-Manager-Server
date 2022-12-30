import { Request, Response } from "express"
import { GetPlayersByTeamUseCase } from "."


export class GetPlayersByTeamController {

  async handle(req: Request, res: Response) {

    const { teamId } = req.params

    const getPlayersByTeam = new GetPlayersByTeamUseCase()

    const players = await getPlayersByTeam.execute(teamId)

    return res.status(200).json(players)

  }

}