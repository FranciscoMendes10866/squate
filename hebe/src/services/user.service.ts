import { PrismaClient } from '@prisma/client'
import { ExistingCodesDTO, CreateClientDTO } from '@utils/user.dto'

const { GEN_CHARS } = process.env

class UserService {
  prisma: PrismaClient
  constructor ({ prisma }: any) {
    this.prisma = prisma
  }

  async getExistingCodes (): Promise<ExistingCodesDTO[]> {
    return this.prisma.user.findMany({
      select: {
        code: true
      }
    })
  }

  async index (user: any): Promise<number> {
    return user.id
  }

  async createClient (): Promise<CreateClientDTO> {
    const users: ExistingCodesDTO[] = await this.getExistingCodes()
    let newUserCode: string = this.genCode()
    while (!!users.find(user => user.code === newUserCode) === true) {
      newUserCode = this.genCode()
    }
    const password = this.genPassword()
    return { code: newUserCode, password }
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

export default new UserService(PrismaClient)
