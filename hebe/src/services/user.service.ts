import { PrismaClient } from '@prisma/client'
import { boomify } from '@hapi/boom'
import { hash } from 'bcrypt'

import { ExistingCodesDTO, CreateNewUserDTO, CreateResDTO } from '@utils/user.dto'

const prisma = new PrismaClient()
const { GEN_CHARS } = process.env

class UserService {
  prisma: any
  constructor () {
    this.prisma = prisma
  }

  async getExistingCodes (): Promise<ExistingCodesDTO[]> {
    return await this.prisma.user.findMany({
      select: {
        code: true
      }
    })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async createNewUser (): Promise<CreateNewUserDTO> {
    const users: ExistingCodesDTO[] = await this.getExistingCodes()
    let newUserCode: string = this.generateCypher(8)
    while (!!users.find(user => user.code === newUserCode) === true) {
      newUserCode = this.generateCypher(8)
    }
    const password = this.generateCypher(12)
    const hashed = await hash(password, 4)
    return { code: newUserCode, password, hashed }
  }

  async createAdmin (): Promise<CreateResDTO | null> {
    const exist: boolean = await this.verifyAdmin()
    if (!exist) {
      const { code, password, hashed }: CreateNewUserDTO = await this.createNewUser()
      await this.createUserRecord(code, hashed, 'admin')
      return { code, password }
    }
    return null
  }

  async createClient (body): Promise<CreateResDTO> {
    const { code, password, hashed }: CreateNewUserDTO = await this.createNewUser()
    const userId: string = await this.createUserRecord(code, hashed, 'client')
    await this.prisma.profile.create({
      data: {
        ...body,
        user: { connect: { id: userId } }
      }
    })
    return { code, password }
  }

  async createUserRecord (code: string, password: string, role: string): Promise<string> {
    const user = await this.prisma.user.create({
      data: {
        code,
        password,
        role
      }
    })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
    return user.id
  }

  async verifyAdmin (): Promise<boolean> {
    return !!await this.prisma.user.findFirst({ where: { role: 'admin' } })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
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
