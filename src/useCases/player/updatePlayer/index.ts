import { BadRequest } from "../../../errors/BadRequest";
import { client } from "../../../prisma/client";
import { IPlayer } from "../../../types/types";

export class UpdatePlayerUseCase {

  async execute(id: string, data: IPlayer) {

    //verificar se algum dos dados enviados é igual a ""
    if (Object.values(data).some(value => value === "" || value === 0.0 || value === 0)) {
      throw new BadRequest("Invalid data", "Send a valid player data");
    }

    const playerExists = await client.player.findUnique({
      where: {
        id
      }
    })

    if (!playerExists) {
      throw new BadRequest("Player not found", "Send a valid player id");
    }

    const player = await client.player.update({
      where: {
        id
      },
      data: {
        age: data.age || undefined,
        height: data.height || undefined,
        name: data.name || undefined,
        nationality: data.nationality || undefined,
        birthDate: data.birthDate || undefined,
        position: data.position || undefined,
        salary: data.salary || undefined,
        weight: data.weight || undefined,
        isInjured: data.isInjured,
      }
    })

    if (!player) {
      throw new BadRequest("Player not updated", "Send a valid player data");
    }

    return player

  }

}