import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactionsRoutes'
import cookies from '@fastify/cookie'

export const app = fastify()

app.register(cookies)

app.register(transactionsRoutes, {
  prefix: '/transactions',
})
