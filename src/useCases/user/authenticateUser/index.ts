import { compare } from "bcryptjs";
import { client } from "../../../prisma/client";
import { sign } from "jsonwebtoken";
import { BadRequest } from "../../../errors/BadRequest";

interface IUserRequest {
  email: string;
  password: string;
}

export class AuthenticateUserUseCase {

  async execute({ email, password }: IUserRequest) {

    if (!email || !password) {

      throw new BadRequest("Incorrect sent data", "Data must have email and password")

    }

    const userExists = await client.user.findFirst({
      where: {
        email
      }
    })

    if (!userExists) {
      throw new BadRequest("User or password incorrect!", "User and password must be valid")
    }

    const passwordMatch = await compare(password, userExists.password)

    if (!passwordMatch) {
      throw new BadRequest("User or password incorrect!", "User and password must be valid")
    }


    const token = sign({}, "4188e77f-4ab0-4c02-ab61-835392c", {
      subject: userExists.id,
      expiresIn: "1d"
    })

    const idUser = userExists.id
    const name = userExists.name

    return { token, idUser, name }

  }

}