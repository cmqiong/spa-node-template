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

  async getList(data:any) {
    const response = await http.get(this.req, '/hi-live-product/merchant/product/questions');
    return response;
  }

  async deleteItem(data:any) {
    const response = await http.deleteAjax(this.req,'/hi-live-product/merchant/product/questions/' + data.productId, {
      data
    });
    return response;
  }

  async modifyItem(data:any) {
    const response = await http.patch(this.req, '/hi-live-product/merchant/product/questions/' + data.productId, {
      data
    });
    return response;
  }

  async createItem(data:any) {
    const response = await http.post(this.req, '/hi-live-product/merchant/product/questions', {
      data
    },'json');
    return response;
  }

}

export default QuestionApi;
