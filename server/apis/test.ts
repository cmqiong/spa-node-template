import * as http from '../libs/axios';
import { Request } from '@types/express';
/**
 * TestApi模块的api
 * @param req
 * @constructor
 */
class TestApi {
    private req: Request;
    constructor(req: Request) {
        this.req = req;
    }

  async testPost(data:any) {
    const response = await http.post(this.req, '/sunbar-artist/artists/search', {
      data,
    }, 'json');
    return response;
  }

}

export default TestApi;
