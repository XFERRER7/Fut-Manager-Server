import "express-async-errors"
import { hash } from "bcryptjs"
import { BadRequest } from "../../../errors/BadRequest"
import { InternalServerError } from "../../../errors/InternalServerError"
import { client } from "../../../prisma/client"
import { IUser } from "../../../types/types"

interface Iresponse {
  data: any | null,
  erro: boolean | null,
  errors: string[] | null,
  message: string | null,
  messageEx: string | null
}

export class CreateUserUseCase {

  async execute({ name, email, password }: IUser) {

    if (!email || !password || !name) {

      throw new BadRequest("Incorrect sent data", "Data must have email, password and name")

    }

    let response: Iresponse = {
      data: null,
      erro: false,
      errors: null,
      message: null,
      messageEx: null
    }

    const userAlreadyExists = await client.user.findFirst({
      where: {
        email
      }
    })


    if (userAlreadyExists) {
      throw new BadRequest("User already exists", "User must have an email that has not yet been registered in the database")
    }

    const passwordHash = await hash(password, 8)

    const user = await client.user.create({
      data: {
        email,
        name,
        password: passwordHash
      }
    })

    if (!user) {
      throw new InternalServerError("User not created", "User must be created")
    }
    if (user) {
      response.data = user
    }

    return response

  }

}