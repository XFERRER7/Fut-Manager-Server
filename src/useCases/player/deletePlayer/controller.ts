import { Request, Response } from "express";
import { DeletePlayerUseCase } from ".";


export class DeletePlayerController {

  async handle(req: Request, res: Response) {

    const { id } = req.params;

    const deletePlayer = new DeletePlayerUseCase();

    await deletePlayer.execute(id);

    return res.status(204).send();

  }

}