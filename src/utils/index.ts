import { Request } from 'express'

export const getEvenToken = (req: Request): string => {
  const token: string | undefined = req?.headers?.authorization?.split(' ')[1]

  if (!token) {
    throw new Error('Must have an authorization token')
  }

  return token
}
