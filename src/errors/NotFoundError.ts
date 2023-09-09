import { RequestError } from "./RequestError.js";

export class NotFoundError extends RequestError {
  constructor(message = "Resource not found", statusCode = 404) {
    super(message, statusCode);
  }
}
