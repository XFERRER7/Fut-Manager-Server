import { client } from "../../../prisma/client";
import { IPlayer } from "../../../types/types";


export class createPlayerUseCase {

  async execute({
    age, birthDate, height, name, nationality, position, salary, weight, teamId, isInjured
  }: IPlayer, photo: string | undefined) {

    if (
      !photo || !age || !birthDate || !height || !name ||
      !nationality || !position || !salary || !weight || !teamId
    ) {
      throw new Error("Missing data")
    }

    const player = await client.player.create({
      data: {
        age,
        avatar: photo,
        height,
        name,
        nationality,
        birthDate,
        position,
        salary,
        weight,
        teamId,
        isInjured
      }
    })

    return player

  }

}