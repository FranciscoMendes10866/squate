import { PrismaClient } from '@prisma/client'
import { boomify } from '@hapi/boom'

import { TanitaStoreDTO, TanitaStoreResDTO } from '@utils/tanita.dto'

const prisma = new PrismaClient()

class UserService {
  prisma: any;
  constructor () {
    this.prisma = prisma
  }

  async store (
    body: TanitaStoreDTO,
    clientId: string
  ): Promise<TanitaStoreResDTO> {
    return await this.prisma.tanita
      .create({
        data: {
          ...body,
          user: { connect: { id: clientId } }
        }
      })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async findAll (clientId: string): Promise<TanitaStoreResDTO[]> {
    return await this.prisma.tanita
      .findMany({ where: { user_id: clientId } })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async patch (body: TanitaStoreResDTO, id: string): Promise<void> {
    await this.prisma.tanita
      .update({
        where: { id },
        data: { ...body }
      })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async destroy (id: string): Promise<void> {
    await this.prisma.tanita
      .delete({
        where: { id }
      })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async findOne (id: string): Promise<TanitaStoreResDTO> {
    return await this.prisma.tanita
      .findFirst({ where: { id } })
      .catch((err) => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }
}

export default new UserService()
