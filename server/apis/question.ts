import * as http from '../libs/axios';
import { Request } from '@types/express';
/**
 * TestApi模块的api
 * @param req
 * @constructor
 */
class QuestionApi {
  private req: Request;
  constructor(req: Request) {
    this.req = req;
  }

  async getQuestionList(data:any) {
    const response = await http.get(this.req, '/hi-live-product/merchant/product/questions');
    return response;
  }

}

export default QuestionApi;
