// 请求响应封装
interface ResponseData {
  code: number;
  data?: any;
  message?: string;
}

class BaseResponse {
  public code!: number;
  public data: any;
  public message!: string;
  constructor({ code, data, message }: ResponseData) {
    this.code = code;
    if (data) this.data = data;
    if (message) this.message = message;
  }
}

export class SuccessResponse extends BaseResponse {
  constructor(code = 200, message = '', data: any = {}) {
    super({
      code,
      message,
      data,
    });
  }
}

export class ErrorResponse extends BaseResponse {
  constructor(code: number, message: string) {
    super({
      code,
      message,
      data: {},
    });
  }
}
