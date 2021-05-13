import { FastifyRequest, FastifyReply } from 'fastify'

import { metricsInit, metricsEnd } from '@providers/prom.provider'
import { UserService } from '@services/index'

import { CreateAdminDTO } from '@utils/user.dto'

const UserController = async (app, opts) => {
  app.get('/api/create-admin', async (request: FastifyRequest, reply: FastifyReply): Promise<CreateAdminDTO | null> => {
    const init = metricsInit()

    const result: CreateAdminDTO | null = await UserService.createAdmin()
    if (result === null) {
      metricsEnd(init)
      return null
    }

    metricsEnd(init)
    return reply.send({ ...result })
  })
}

export default UserController
