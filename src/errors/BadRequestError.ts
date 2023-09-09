import { RequestError } from "./RequestError.js";

export class BadRequestError extends RequestError {
  constructor(message = "Bad Request", statusCode = 400) {
    super(message, statusCode);
  }
}
