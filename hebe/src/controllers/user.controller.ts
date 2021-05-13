import { FastifyRequest, FastifyReply } from 'fastify'

import { metricsInit, metricsEnd } from '@providers/prom.provider'
import { UserService } from '@services/index'

const UserController = async (app, opts) => {
  app.get('/api/signup', async (request: FastifyRequest, reply: FastifyReply) => {
    const init = metricsInit()

    const token = app.jwt.sign({ id: 1 })

    metricsEnd(init)
    return reply.send({ token })
  })

  app.get('/api', { preValidation: [app.authGuard] }, async (request: FastifyRequest, reply: FastifyReply) => {
    const init = metricsInit()

    const userId = await UserService.index(request.user)

    metricsEnd(init)
    return reply.send({ userId })
  })

  app.get('/api/create-admin', async (request: FastifyRequest, reply: FastifyReply) => {
    const init = metricsInit()

    const result = await UserService.createAdmin()
    if (result === null) {
      metricsEnd(init)
      return reply.send({ error: 'Admin already exists b****!' })
    }

    metricsEnd(init)
    return reply.send({ ...result })
  })
}

export default UserController
