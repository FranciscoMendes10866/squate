import { FastifyRequest, FastifyReply } from 'fastify'

import { metricsInit, metricsEnd } from '@providers/prom.provider'
import { UserService } from '@services/index'

import { CreateResDTO } from '@utils/user.dto'
import { createClientSchema } from '@utils/user.schema'

const UserController = async (app, opts) => {
  app.get('/api/create-admin', async (request: FastifyRequest, reply: FastifyReply): Promise<CreateResDTO | null> => {
    const init = metricsInit()

    const result: CreateResDTO | null = await UserService.createAdmin()
    if (result === null) {
      metricsEnd(init)
      return null
    }

    metricsEnd(init)
    return reply.send({ ...result })
  })

  app.post('/api/create-client', createClientSchema, async (request: FastifyRequest, reply: FastifyReply): Promise<CreateResDTO> => {
    const init = metricsInit()

    const result: CreateResDTO = await UserService.createClient(request.body)

    metricsEnd(init)
    return reply.send({ ...result })
  })
}

export default UserController
