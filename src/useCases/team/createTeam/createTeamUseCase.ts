import 'express-async-errors'
import { BadRequest } from '../../../errors/BadRequest';
import { client } from "../../../prisma/client";
import { ITeam } from "../../../types/types";


export class createTeamUseCase {

  async execute({ name, logo, userId }: ITeam) {


    if (!name || !logo || !userId) {
      throw new Error('Missing data')
    }

    const userHasTeam = await client.team.findUnique({
      where: {
        userId: userId
      }
    })

    if (userHasTeam) {
      throw new BadRequest('User already has a team', 'A user can only have one team')
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
        userId: userId
      }
    })

    if (!team) {
      throw new Error('Error creating team')
    }

    return team

  }

}