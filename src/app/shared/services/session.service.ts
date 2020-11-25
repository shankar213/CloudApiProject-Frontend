import {Injectable} from '@angular/core';
import {APP_CONSTANTS} from '../constants/app-constants';
import {UtilsService} from './utils.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class SessionService {
  constructor(private _utilService: UtilsService,
              private _router: Router) {
  }
  addSessionItem(key, value): any {
    window.sessionStorage.setItem(key, value);
  }

  getSessionItem(key): any {
    return window.sessionStorage.getItem(key);
  }

  removeSessionItem(key): any {
    window.sessionStorage.removeItem(key);
  }
}
