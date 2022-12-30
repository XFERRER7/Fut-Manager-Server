import { BadRequest } from "../../../errors/BadRequest"
import { NotFound } from "../../../errors/NotFound"
import { client } from "../../../prisma/client"


export class GetPlayerByIdUseCase {

  async execute(id: string) {

    if (!id) {
      throw new BadRequest("Invalid id", "Id must be valid")
    }

    const player = await client.player.findUnique({
      where: {
        id
      }
    })

    if(!player) {
      throw new NotFound("Player not found")
    }

    return player

  }

}