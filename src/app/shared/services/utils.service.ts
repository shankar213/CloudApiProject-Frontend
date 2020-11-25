import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import {APP_CONSTANTS} from '../constants/app-constants';
import {ToastrService} from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(private http: HttpClient,
              private router: Router,
              private _toasterService: ToastrService) {
  }

  /**
   *
   * @param1 {string} param1
   * @param2 {string} param2
   * To generate the link for API call
   */

  linkGeneration(param1, param2 = '', param3 = ''): string {
    if (environment.production) {
      return `${location.protocol}//` + environment.api_host + param1.prefix + param2 + param3;
    } else {
      return 'http://' + environment.api_host  + param1.prefix + param2 + param3 + '?apikey=gv5MtsSrs44ZnDu5S36Ekh8viA4IEuyG';
    }
  }

  callGetAPI(url): any {
    return this.http.get(url, this.setHeader());
  }

  callPostAPI(url, body): any {
    return this.http.post(url, body, this.setHeader());
  }

  callPutAPI(url, body): any {
    return this.http.put(url, body, this.setHeader());
  }

  callDeleteApi(url): any {
    return this.http.delete(url, this.setHeader());
  }

  /**
   *
   * To set the headers
   */
  setHeader(): any {
    const headers = {};
    headers[APP_CONSTANTS.VALUE_CONTENT_TYPE] = 'application/json';
    return headers;
  }

  toast(message, title = 'Attention', type = 'success'): any {
    if (type === 'success') {
      this._toasterService.success(message, title);
    } else if (type === 'error') {
      this._toasterService.error(message, title);
    }
  }


}
