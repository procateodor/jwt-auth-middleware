import * as jwt from 'jsonwebtoken'
import * as HttpStatus from 'http-status-codes'

import { NextFunction, Request, Response } from 'express'
import { getEvenToken } from './utils'

export const requireAuth = (secret: string) => (req: Request, res: Response, next: NextFunction) => {
  try {
    const token: string = getEvenToken(req)
    const claims = jwt.verify(token, secret || (process.env.JWT_KEY as string) || (process.env.SECRET_KEY as string))

    Object.assign(req, { user: claims })

    next()
  } catch (error) {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      success: false,
      message: error.message
    })
  }
}
