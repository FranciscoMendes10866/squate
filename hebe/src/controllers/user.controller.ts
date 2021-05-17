import { FastifyRequest, FastifyReply } from 'fastify'

import { metricsInit, metricsEnd } from '@providers/prom.provider'
import { UserService } from '@services/index'

import { CreateResDTO, FindClientProfileDTO, FindClientsDTO, SignInDTO, SignInResDTO } from '@utils/user.dto'
import { createClientSchema, FindProfileSchema, signInSchema } from '@utils/user.schema'

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

  app.post('/api/create-client', createClientSchema, async (request: FastifyRequest, reply: FastifyReply): Promise<CreateResDTO | null> => {
    const { role }: any = request.user
    if (role === 'admin') {
      const init = metricsInit()

      const body: any = request.body
      const result: CreateResDTO = await UserService.createClient(body)

      metricsEnd(init)
      return reply.send({ ...result })
    }
    return reply.send(null)
  })

  app.post('/api/sign-in', signInSchema, async (request: FastifyRequest, reply: FastifyReply): Promise<SignInResDTO | null> => {
    const init = metricsInit()

    const { code, password }: any = request.body
    const result: SignInDTO = await UserService.signIn(code, password)
    if (result === null) {
      metricsEnd(init)
      return null
    }

    const token = app.jwt.sign({ id: result.id, role: result.role })

    metricsEnd(init)
    return reply.send({ user: { token, role: result.role } })
  })

  app.get('/api/clients', { preValidation: [app.authGuard] }, async (request: FastifyRequest, reply: FastifyReply): Promise<FindClientsDTO[] | null> => {
    const { role }: any = request.user
    if (role === 'admin') {
      const init = metricsInit()

      const results: FindClientsDTO[] = await UserService.findClients()

      metricsEnd(init)
      return reply.send(results)
    }
    return reply.send(null)
  })

  app.get('/api/profile/:clientId', { preValidation: [app.authGuard], schema: FindProfileSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<FindClientProfileDTO> => {
    const init = metricsInit()

    const { clientId }: any = request.params
    const results: FindClientProfileDTO = await UserService.findClientProfile(clientId)

    metricsEnd(init)
    return reply.send(results)
  })
}

export default UserController
