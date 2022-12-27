import { SignUpController } from "./signup"
import { MissingParamError } from "../errors/missing-param-error"

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Shuld return 400 if no name is provided', () => {
    const sut = makeSut() // system under test
    const httpRequest = {
      body: {
        email: 'test@example.com',
        password: 'test',
        passwordConfimation: 'test',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })
});

test('Shuld return 400 if no email is provided', () => {
  const sut = makeSut()
  const httpRequest = {
    body: {
      name: 'any-name',
      password: 'test',
      passwordConfimation: 'test',
    }
  }
  const httpResponse = sut.handle(httpRequest)
  expect(httpResponse.statusCode).toBe(400)
  expect(httpResponse.body).toEqual(new MissingParamError('email'))
})

test('Shuld return 400 if no password is provided', () => {
  const sut = makeSut()
  const httpRequest = {
    body: {
      name: 'any-name',
      email: 'test@example.com',
      passwordConfimation: 'test',
    }
  }
  const httpResponse = sut.handle(httpRequest)
  expect(httpResponse.statusCode).toBe(400)
  expect(httpResponse.body).toEqual(new MissingParamError('password'))
})

test('Shuld return 400 if no password confirmation is provided', () => {
  const sut = makeSut()
  const httpRequest = {
    body: {
      name: 'any-name',
      email: 'test@example.com',
      password: 'test',
    }
  }
  const httpResponse = sut.handle(httpRequest)
  expect(httpResponse.statusCode).toBe(400)
  expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
})
