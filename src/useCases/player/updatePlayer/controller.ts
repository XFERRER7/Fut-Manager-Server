import { Request, Response } from "express";
import { UpdatePlayerUseCase } from ".";


export class UpdatePlayerController {
  
  async handle(req: Request, res: Response) {

    const {data, id} = req.body;

    const updatePlayer = new UpdatePlayerUseCase();

    const player = await updatePlayer.execute(id, data);

    return res.status(200).json({
      message: "Player updated successfully",
      player
    });

  }

}