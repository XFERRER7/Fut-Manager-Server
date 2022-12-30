import 'express-async-errors'
import { client } from "../../../prisma/client";
import { ITeam } from "../../../types/types";


export class createTeamUseCase {

  async execute({ name, logo, userId }: ITeam) {
    
    if (!name || !logo || !userId) {
      throw new Error('Missing data')
    }

    const userExists = await client.user.findUnique({
      where: {
        id: userId
      }
    })

    if (!userExists) {
      throw new Error('User not found')
    }
    
    const team = await client.team.create({
      data: {
        name,
        logo,
        userId
      }
    })


    if (!team) {
      throw new Error('Error creating team')
    }
    
    return team
    
  }

}