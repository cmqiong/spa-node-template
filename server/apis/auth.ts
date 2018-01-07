import * as http from '../libs/axios';
import { Request } from '@types/express';
/**
 * 验证模块的api
 * @param req
 * @constructor
 */
class AuthApi {
  private req: Request;
  constructor(req: Request) {
    this.req = req;
  }
  async getClientToken(data:any) {
    const token = await http.post(this.req, '/api/v1/uac/oauth/token', {
      data,
      headers: {
        Authorization: 'Basic c3VuYmFyX21lcmNoYW50OjU3MUQyOTZCMzJGOTM1NzRFN0U2N0ZBMTA0NTBBMUU4',
      },
    }, 'form');
    return token;
  }
}

export default AuthApi;
