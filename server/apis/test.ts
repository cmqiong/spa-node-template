import * as http from '../libs/axios';
import { Request } from '@types/express';
import axios from 'axios';
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

    // async testPost(data:any){
    //   axios.post('http://112.74.128.90:8081/sunbar-artist/artists/search', {
    //   }, {
    //     headers: {
    //       'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzeXN0ZW1faWQiOiJzdW5iYXIiLCJzY29wZSI6WyJvcGVuaWQiLCJ3cml0ZSIsInJlYWQiLCJzb3BfYmFzZSIsInNvcF91c2hvcCIsInNvcF9zdW5iYXIiLCJzb3BfdWFjIiwic29wX2FjY291bnQiLCJzb3BfcHVzaCIsInNvcF9zdW5iYXJfbWVyY2hhbnQiLCJzb3Bfc3VuYmFyX3dlY2hhdCIsInNvcF9zdW5iYXJfZnVuY3Rpb25hbF9tb2R1bGVzIiwiYmV0LWdhbWUiLCJzb3BfcGF5Iiwic29wX3NtcyIsImhpLWxpdmUiLCJzdW5iYXItYmFyIiwic29wX3N1bmJhcl9tZXNzYWdlX3Vwc3RyZWFtIiwic3VuYmFyLXdlY2hhdC1hcGkiXSwiZXhwIjoxNTE1MzY5OTEzLCJhdXRob3JpdGllcyI6WyJST0xFX1RSVVNURURfQ0xJRU5UIl0sImp0aSI6IjAyZThlZjJkLWQ2ODAtNDU0My05Yzc2LTdlNWNmNGRmM2FmYiIsImNsaWVudF9pZCI6InN1bmJhcl9tZXJjaGFudCJ9.LcQgOG7z6uCPJbjH2J1QjfosFJ-hcPvxb5qutsyiv_AR70LRxtwlNRdpIYqMq-hkii4Nb0Hdp7F61GRT0Sel1CuYgK6FbAQZJENo7SAHXlNKQUjzPt9em6wjw_etXDb8ByLjkuFB5B4ou28ifX4bBXZAsMvhAzRaQ7vFxhhtqJEgY2kXHJMDHi4_Tfz5oZYdbvO2GWMokkQwmvHoFCmkfcTPvLi_cT7J_mkZWFBWWlo19elkJvnPiQfrwpG5_7cYh_mCWTpdQnsp9EguXOqHioIpGIfMXFNOrv0KAINPguSxZet0hLKn0MQc4Kho27rzeg60vSDS1lnqyDrp6619yg',
    //       'Content-Type': 'application/json;charset=UTF-8'
    //     }
    //   }).then(function (response) {
    //     console.log('----------response----------')
    //     console.log(response)
    //     return response;
    //   }, function (err) {
    //     console.log('---------0000 err------')
    //     console.log(err)
    //   })
    // }
}

export default TestApi;
