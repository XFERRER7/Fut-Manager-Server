import "express-async-errors"
import { client } from "../../../prisma/client"


export class GetTeamUserCase {

  async execute(id: string) {

    if (!id) {
      throw new Error("TeamId is required")
    }

    const teamExists = await client.team.findUnique({
      where: {
        id
      }
    })

    if (!teamExists) {
      throw new Error("Team not found")
    }

    const team = await client.team.findUnique({
      where: {
        id
      },
      include: {
        players: true
      }
    })

    return team

  }

}