import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Http, URLSearchParams } from '@angular/http';
import { Config } from '../config';
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';



@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(private router: Router, private http: Http) {
    }

    public canActivate(type) : Observable<boolean>|boolean {
      let session = localStorage.getItem("session");
      if (session != undefined) {
        return this.verifySession(session).pipe( map((data: any) => {
          let auth = JSON.parse(data._body);
          if (auth.err_code == 0) { 
            return true;
          } else {
            this.router.navigate(['']);
            return false;
          }
        }));
      } else {
          this.router.navigate(['']);
          return false;
      }
    }

    public verifySession(strSession) {
      let params: URLSearchParams = new URLSearchParams();
      params.set('session', strSession);

      return this.http.get(Config.api_url + '/verify', { search: params });
    }
}