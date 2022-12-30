import { client } from "../../../prisma/client";


export class DeletePlayerUseCase {

  async execute(id: string) {

    const playerExists = await client.player.findUnique({
      where: {
        id
      }
    })

    if (!playerExists) {
      throw new Error("Player not found");
    }

    await client.player.delete({
      where: {
        id
      }
    })

  }

}