import { FastifyReply, FastifyRequest } from 'fastify'

export async function checkSessionIdExists(
  request: FastifyRequest,
  replay: FastifyReply,
) {
  const sessionId = request.cookies.sessionId

  if (!sessionId) {
    return replay.code(401).send({ error: 'Unauthorized' })
  }
}
