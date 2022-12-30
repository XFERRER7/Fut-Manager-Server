import { client } from "../../../prisma/client";
import { IPlayer } from "../../../types/types";

export class UpdatePlayerUseCase {

  async execute(id: string, data: IPlayer) {


    const playerExists = await client.player.findUnique({
      where: {
        id
      }
    })

    if (!playerExists) {
      throw new Error("Player not found");
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
        isInjured: data.isInjured || undefined
      }
    })


    return player
    
  }

}