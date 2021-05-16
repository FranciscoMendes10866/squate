import { PrismaClient } from '@prisma/client'
import { boomify } from '@hapi/boom'
import { hash, compare } from 'bcrypt'

import {
  ExistingCodesDTO,
  CreateNewUserDTO,
  CreateResDTO,
  SignInDTO,
  FindUserDTO,
  CreateClientInputDTO,
  FindClientsDTO,
  FindClientProfileDTO
} from '@utils/user.dto'

const prisma = new PrismaClient()
const { GEN_CHARS } = process.env

class UserService {
  prisma: any;
  constructor () {
    this.prisma = prisma
  }

  async getExistingCodes (): Promise<ExistingCodesDTO[]> {
    return await this.prisma.user
      .findMany({
        select: {
          code: true
        }
      })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async createNewUser (): Promise<CreateNewUserDTO> {
    const users: ExistingCodesDTO[] = await this.getExistingCodes()
    let newUserCode: string = this.generateCypher(8)
    while (!!users.find((user) => user.code === newUserCode) === true) {
      newUserCode = this.generateCypher(8)
    }
    const password = this.generateCypher(12)
    const hashed = await hash(password, 4)
    return { code: newUserCode, password, hashed }
  }

  async createAdmin (): Promise<CreateResDTO | null> {
    const exist: boolean = await this.verifyAdmin()
    if (!exist) {
      const { code, password, hashed }: CreateNewUserDTO =
        await this.createNewUser()
      await this.createUserRecord(code, hashed, 'admin')
      return { code, password }
    }
    return null
  }

  async createClient (body: CreateClientInputDTO): Promise<CreateResDTO> {
    const { code, password, hashed }: CreateNewUserDTO =
      await this.createNewUser()
    const userId: string = await this.createUserRecord(code, hashed, 'client')
    await this.prisma.profile.create({
      data: {
        ...body,
        user: { connect: { id: userId } }
      }
    })
    return { code, password }
  }

  async createUserRecord (
    code: string,
    password: string,
    role: string
  ): Promise<string> {
    const user = await this.prisma.user
      .create({
        data: {
          code,
          password,
          role
        }
      })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
    return user.id
  }

  async signIn (code: string, password: string): Promise<SignInDTO | null> {
    const user: FindUserDTO = await this.findByCode(code)
    if (!user) return null
    const val = await compare(password, user.password)
    if (!val) return null
    return { id: user.id, role: user.role }
  }

  async findClients (): Promise<FindClientsDTO[]> {
    return await this.prisma.user.findMany({
      where: { role: 'client' },
      select: {
        id: true,
        profile: {
          select: {
            firstName: true,
            lastName: true,
            objective: true
          }
        }
      }
    })
  }

  async findClientProfile (clientId: string): Promise<FindClientProfileDTO> {
    return await this.prisma.profile.findFirst({
      where: { user_id: clientId }
    })
  }

  async findByCode (code: string): Promise<FindUserDTO> {
    return await this.prisma.user
      .findFirst({
        where: { code },
        select: {
          id: true,
          password: true,
          role: true
        }
      })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async verifyAdmin (): Promise<boolean> {
    return !!(await this.prisma.user
      .findFirst({ where: { role: 'admin' } })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      }))
  }

  generateCypher (len: number): string {
    let text = ''
    for (let i = 0; i < len; i++) {
      text += GEN_CHARS.charAt(Math.floor(Math.random() * GEN_CHARS.length))
    }
    return text
  }
}

export default new UserService()
