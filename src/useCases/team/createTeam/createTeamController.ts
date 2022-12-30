import { Request, Response } from "express";
import { createTeamUseCase } from "./createTeamUseCase";


export class createTeamController {

  async handle(req: Request, res: Response) {

    const logo = req.file?.filename
    const {name, userId} = req.body

    const createTeam = new createTeamUseCase()

    const team = await createTeam.execute({ name, logo, userId })

    return res.status(201).json(team)

  }


}