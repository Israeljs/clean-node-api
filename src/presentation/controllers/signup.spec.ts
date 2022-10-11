import { SingUpController } from "./signup"

describe('Singup Controller', () => {
  test('Shuld return 400 if no name is provided', () => {
    const sut = new SingUpController() // system under test
    const httpRequest = {
      body: {
        email: 'test@example.com',
        password: 'test',
        passwordConfimation: 'test',
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
  })
})
