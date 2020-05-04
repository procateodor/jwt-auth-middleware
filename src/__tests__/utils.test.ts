import { getEvenToken } from '../utils'
import { Request } from 'express'

const mockBearerSuccessRequest = <Request>{
  headers: {
    authorization: 'Bearer test'
  }
}

const mockBearerFailRequest = <Request>{
  headers: {}
}

test('should return if bearer token', () => {
  expect(getEvenToken(mockBearerSuccessRequest)).toBe('test')
})

test('should throw an error if no bearer token', () => {
  try {
    getEvenToken(mockBearerFailRequest)
  } catch (error) {
    expect(error.message).toBe('Must have an authorization token')
  }
})
