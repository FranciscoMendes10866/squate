import { FastifyRequest, FastifyReply } from 'fastify'

import { metricsInit, metricsEnd } from '@providers/prom.provider'
import { MeasurementsService } from '@services/index'
import { DestroySchema, StoreSchema, patchSchema, FindAllSchema, FindOneSchema } from '@utils/measurements.schema'
import { BodyDTO, FindDTO } from '@utils/measurements.dto'

const MeasurementsController = async (app, opts) => {
  app.post('/api/measurement/:clientId', { preValidation: [app.authGuard], schema: StoreSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<BodyDTO> => {
    const init = metricsInit()

    const body: any = request.body
    const { clientId }: any = request.params
    const result: BodyDTO = await MeasurementsService.store(body, clientId)

    metricsEnd(init)
    return reply.send({ ...result })
  })

  app.patch('/api/measurement/:id', { preValidation: [app.authGuard], schema: patchSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<null> => {
    const init = metricsInit()

    const body: any = request.body
    const { id }: any = request.params
    await MeasurementsService.patch(body, id)

    metricsEnd(init)
    return reply.send(null)
  })

  app.get('/api/measurement/:clientId', { preValidation: [app.authGuard], schema: FindAllSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<FindDTO[]> => {
    const init = metricsInit()

    const { clientId }: any = request.params
    const result: FindDTO[] = await MeasurementsService.findAll(clientId)

    metricsEnd(init)
    return reply.send(result)
  })

  app.delete('/api/measurement/:id', { preValidation: [app.authGuard], schema: DestroySchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<null> => {
    const init = metricsInit()

    const { id }: any = request.params
    await MeasurementsService.destroy(id)

    metricsEnd(init)
    return reply.send(null)
  })

  app.get('/api/measurement/detail/:id', { preValidation: [app.authGuard], schema: FindOneSchema }, async (request: FastifyRequest, reply: FastifyReply): Promise<FindDTO> => {
    const init = metricsInit()

    const { id }: any = request.params
    const result: FindDTO = await MeasurementsService.findOne(id)

    metricsEnd(init)
    return reply.send(result)
  })
}

export default MeasurementsController
