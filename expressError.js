/** ExpressError extends normal JS error so we can
 *  add a status and message when we make an instance of it.
 *
 *  The error-handling middleware will return this.
 */

class ExpressError extends Error {
    constructor(message, status) {
      super();
      this.message = message;
      this.status = status;
    }
  }

  /** 404 EXTERNAL API DATA NOT FOUND error. */

  class ApiNotFoundError extends ExpressError {
    constructor(message = "External API Not Found") {
      super(message, 404);
    }
  }
  
  /** 404 NOT FOUND error. */
  
  class NotFoundError extends ExpressError {
    constructor(message = "Not Found") {
      super(message, 404);
    }
  }
  
  /** 401 UNAUTHORIZED error. */
  
  class UnauthorizedError extends ExpressError {
    constructor(message = "Unauthorized") {
      super(message, 401);
    }
  }
  
  /** 400 BAD REQUEST error. */
  
  class BadRequestError extends ExpressError {
    constructor(message = "Bad Request") {
      super(message, 400);
    }
  }
  
  /** 403 FORBIDDEN REQUEST error. */
  
  class ForbiddenError extends ExpressError {
    constructor(message = "Bad Request") {
      super(message, 403);
    }
  }

  /** 500 SEND MESSAGE error */
  class SendMessageError extends ExpressError {
    constructor(message = "Error sending message") {
      super(message, 500);
    }
  }
  
  module.exports = {
    ApiNotFoundError,
    ExpressError,
    NotFoundError,
    UnauthorizedError,
    BadRequestError,
    ForbiddenError,
    SendMessageError
  };