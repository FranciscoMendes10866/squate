import { FastifyRequest, FastifyReply } from 'fastify'

import { metricsInit, metricsEnd } from '@providers/prom.provider'
import { MeasurementsService } from '@services/index'
import { DestroySchema, StoreSchema, patchSchema, FindSchema } from '@utils/measurements.schema'
import { BodyDTO, FindAllDTO } from '@utils/measurements.dto'

const MeasurementsController = async (app, opts) => {
  app.post('/api/measurement/:clientId', StoreSchema, async (request: FastifyRequest, reply: FastifyReply): Promise<BodyDTO> => {
    const init = metricsInit()

    const body: any = request.body
    const { clientId }: any = request.params
    const result = await MeasurementsService.store(body, clientId)

    metricsEnd(init)
    return reply.send({ ...result })
  })

  app.patch('/api/measurement/:id', patchSchema, async (request: FastifyRequest, reply: FastifyReply): Promise<null> => {
    const init = metricsInit()

    const body: any = request.body
    const { id }: any = request.params
    await MeasurementsService.patch(body, id)

    metricsEnd(init)
    return null
  })

  app.get('/api/measurement/:clientId', FindSchema, async (request: FastifyRequest, reply: FastifyReply): Promise<FindAllDTO[]> => {
    const init = metricsInit()

    const { clientId }: any = request.params
    const result: FindAllDTO[] = await MeasurementsService.findAll(clientId)

    metricsEnd(init)
    return reply.send(result)
  })

  app.delete('/api/measurement/:id', DestroySchema, async (request: FastifyRequest, reply: FastifyReply): Promise<null> => {
    const init = metricsInit()

    const { id }: any = request.params
    await MeasurementsService.destroy(id)

    metricsEnd(init)
    return null
  })
}

export default MeasurementsController
