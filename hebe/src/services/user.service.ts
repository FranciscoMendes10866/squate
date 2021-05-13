import { PrismaClient } from '@prisma/client'

import { ExistingCodesDTO, CreateNewUserDTO, CreateAdminDTO } from '@utils/user.dto'

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
  }

  async index (user: any): Promise<number> {
    return user.id
  }

  async createNewUser (): Promise<CreateNewUserDTO> {
    const users: ExistingCodesDTO[] = await this.getExistingCodes()
    let newUserCode: string = this.genCode()
    while (!!users.find(user => user.code === newUserCode) === true) {
      newUserCode = this.genCode()
    }
    const password = this.genPassword()
    return { code: newUserCode, password }
  }

  async createAdmin (): Promise<CreateAdminDTO | null> {
    const exist = await this.verifyAdmin()
    if (!exist) {
      const { code, password }: CreateNewUserDTO = await this.createNewUser()
      return await this.prisma.user.create({
        data: {
          code,
          password,
          role: 'admin'
        }
      })
    }
    return null
  }

  async verifyAdmin (): Promise<boolean> {
    return !!await this.prisma.user.findFirst({ where: { role: 'admin' } })
  }

  genCode (): string {
    const len = 8
    let text = ''
    for (let i = 0; i < len; i++) {
      text += GEN_CHARS.charAt(Math.floor(Math.random() * GEN_CHARS.length))
    }
    return text
  }

  genPassword (): string {
    const len = 12
    let text = ''
    for (let i = 0; i < len; i++) {
      text += GEN_CHARS.charAt(Math.floor(Math.random() * GEN_CHARS.length))
    }
    return text
  }
}

export default new UserService()
