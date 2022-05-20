class HttpExceptionError extends Error {
  status: number;

  message: string;

  details?: [err: { type: string, message: string } ];

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export default HttpExceptionError;
