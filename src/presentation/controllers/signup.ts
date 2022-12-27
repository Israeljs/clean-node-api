import { MissingParamError } from "../errors/missing-param-error"
import { HttpResponse, HttpRequest } from "../protocols/http"
import { badRequest } from "../helpers/http-helpers"
import { Controller } from "../protocols/controller"

export class SingUpController implements Controller {
  handle(httpRequest: HttpRequest): HttpResponse {
    const requestFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const field of requestFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissingParamError(field))
      }
    }
  }
}
