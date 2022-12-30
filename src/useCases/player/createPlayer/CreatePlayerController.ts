import { Request, Response } from "express";
import { IPlayer } from "../../../types/types";
import { createPlayerUseCase } from "./CreatePlayerUseCase";


export class createPlayerController {

  async handle(req: Request, res: Response) {

    const reqBody: IPlayer = JSON.parse(req.body.data)

    const { age, avatar, birthDate, height, name, nationality, position, salary, weight, teamId, isInjured } = reqBody

    const photo = req.file?.filename

    const createPlayer = new createPlayerUseCase()

    const player = await createPlayer.execute(
      {
        age,
        avatar,
        birthDate,
        height,
        name,
        nationality,
        position,
        salary,
        weight,
        teamId,
        isInjured
      }
      , photo
    )

    return res.status(201).json(player)

  }

}