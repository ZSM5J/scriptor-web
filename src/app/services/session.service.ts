import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import { Config } from '../config';
import { map } from 'rxjs/operators';


@Injectable()
export class SessionService {

  private results: string[];

  constructor(private http: Http) { 

  }

  public getSession(strCode, strNonce){
    let params: URLSearchParams = new URLSearchParams();
    params.set('code', strCode);
    params.set('nonce', strNonce);
    return this.http.get(Config.api_url + '/auth', { search: params });
  }

  public deleteSession(strSession) {
    let params: URLSearchParams = new URLSearchParams();
    params.set('session', strSession);

    return this.http.get(Config.api_url + '/logout', { search: params }).pipe(map(res => res.json()));
  }
}
