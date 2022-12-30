import { client } from "../../../prisma/client";

export class GetPlayersByTeamUseCase {

  async execute(teamId: string) {
    
    const teamExists = await client.team.findUnique({
      where: {
        id: teamId
      }
    })

    if (!teamExists) {
      throw new Error("Team not found")
    }

    const players = await client.player.findMany({
      where: {
        teamId
      }
    })

    if (!players) {
      throw new Error("No players found")
    }

    return players

  }

}