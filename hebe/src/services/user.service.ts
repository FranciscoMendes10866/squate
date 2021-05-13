import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

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
    const hashed = await hash(password, 4)
    return { code: newUserCode, password, hashed }
  }

  async createAdmin (): Promise<CreateAdminDTO | null> {
    const exist: boolean = await this.verifyAdmin()
    if (!exist) {
      const { code, password, hashed }: CreateNewUserDTO = await this.createNewUser()
      await this.prisma.user.create({
        data: {
          code,
          password: hashed,
          role: 'admin'
        }
      })
      return { code, password }
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
