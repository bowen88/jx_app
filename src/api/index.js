import * as http from '../common/http'
import apiUrl from '../common/config'


//登陆
export class api_userlogin {
  
    userlogin(param) {
      return http.postJson('/huoqu', param, apiUrl['apiUrl']).then(res => {
        return res;
      });
    };
  }