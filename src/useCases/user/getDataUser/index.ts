import { BadRequest } from "../../../errors/BadRequest"
import { client } from "../../../prisma/client"


export class GetDataUserUseCase {
  async execute(id: string) {

    const user = await client.user.findFirst({
      where: {
        id
      },
      include: {
        teams: true
      }
    })

    if (!user) {
      throw new BadRequest("User not found", "User must be registered")
    }

    return user
  }
}