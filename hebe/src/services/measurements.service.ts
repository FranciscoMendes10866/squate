import { PrismaClient } from '@prisma/client'
import { boomify } from '@hapi/boom'

import { BodyDTO, FindDTO } from '@utils/measurements.dto'

const prisma = new PrismaClient()

class UserService {
  prisma: any
  constructor () {
    this.prisma = prisma
  }

  async store (body: BodyDTO, clientId: string): Promise<BodyDTO> {
    return await this.prisma.measurement.create({
      data: {
        ...body,
        user: { connect: { id: clientId } }
      }
    })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async patch (body: BodyDTO, id: string): Promise<void> {
    await this.prisma.measurement.update({
      where: { id },
      data: {
        ...body
      }
    })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async findAll (clientId: string): Promise<FindDTO[]> {
    return await this.prisma.measurement.findMany({
      where: { user_id: clientId },
      select: {
        id: true,
        peitoral: true,
        quadril: true,
        cintura: true,
        coxa: true,
        braco: true,
        bracoContraido: true
      }
    })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async destroy (id: string): Promise<void> {
    await this.prisma.measurement.delete({ where: { id } })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }

  async findOne (id: string): Promise<FindDTO> {
    return await this.prisma.measurement.findFirst({
      where: { id },
      select: {
        id: true,
        peitoral: true,
        quadril: true,
        cintura: true,
        coxa: true,
        braco: true,
        bracoContraido: true
      }
    })
      .catch(err => {
        throw boomify(err)
      })
      .finally(async () => {
        await this.prisma.$disconnect()
      })
  }
}

export default new UserService()
