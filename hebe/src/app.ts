import fastify from 'fastify'
import cors from 'fastify-cors'
import helmet from 'fastify-helmet'
import jwt from 'fastify-jwt'
import compress from 'fastify-compress'

import { logger } from '@utils/index'
import { AuthGuard } from '@middlewares/index'
import { MetricsController, UserController } from '@controllers/index'

const { NODE_ENV, CORS_ORIGIN, JWT_SECRET } = process.env

let app

NODE_ENV !== 'TESTING' ? app = fastify({ logger }) : app = fastify()

app.register(cors, { origin: CORS_ORIGIN })
app.register(helmet)
app.register(jwt, { secret: JWT_SECRET })
app.register(AuthGuard)
app.register(compress)
app.register(MetricsController)
app.register(UserController)

export default app
