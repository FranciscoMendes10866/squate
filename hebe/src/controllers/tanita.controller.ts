import { FastifyRequest, FastifyReply } from 'fastify'

import { metricsInit, metricsEnd } from '@providers/prom.provider'
import { createTanitaSchema, FindAllSchema, IdParamsSchema, patchTanitaSchema } from '@utils/tanita.schema'
import { TanitaService } from '@services/index'
import { TanitaStoreResDTO } from '@utils/tanita.dto'

const TanitaController = async (app, opts) => {
  app.post('/api/tanita/:clientId', { preValidation: [app.authGuard], schema: createTanitaSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<TanitaStoreResDTO> => {
    const init = metricsInit()

    const { clientId }: any = request.params
    const body: any = request.body
    const result: TanitaStoreResDTO = await TanitaService.store(body, clientId)

    metricsEnd(init)
    return reply.send({ ...result })
  })

  app.get('/api/tanita/:clientId', { preValidation: [app.authGuard], schema: FindAllSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<TanitaStoreResDTO[]> => {
    const init = metricsInit()

    const { clientId }: any = request.params
    const result: TanitaStoreResDTO[] = await TanitaService.findAll(clientId)

    metricsEnd(init)
    return reply.send(result)
  })

  app.patch('/api/tanita/:id', { preValidation: [app.authGuard], schema: patchTanitaSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<null> => {
    const init = metricsInit()

    const body: any = request.body
    const { id }: any = request.params
    await TanitaService.patch(body, id)

    metricsEnd(init)
    return reply.send(null)
  })

  app.delete('/api/tanita/:id', { preValidation: [app.authGuard], schema: IdParamsSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<null> => {
    const init = metricsInit()

    const { id }: any = request.params
    await TanitaService.destroy(id)

    metricsEnd(init)
    return reply.send(null)
  })

  app.get('/api/tanita/detail/:id', { preValidation: [app.authGuard], schema: IdParamsSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<TanitaStoreResDTO> => {
    const init = metricsInit()

    const { id }: any = request.params
    const result: TanitaStoreResDTO = await TanitaService.findOne(id)

    metricsEnd(init)
    return reply.send(result)
  })
}

export default TanitaController
