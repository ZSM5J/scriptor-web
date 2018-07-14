import { Injectable } from '@angular/core';
import { Config } from '../config';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  redirect_uri = Config.host_url + '/auth';

  // Generate 2 different unique values (32 symbols) and store (below).
  nonce = 'qqq';
  state = 'www';

  login(){

    // Here store the state and nonce. maybe in cookies better, dont want to google how to do it=
    localStorage.setItem('nonce', this.nonce);
    localStorage.setItem('state', this.state);

    var login_uri: string = Config.msa_oauth_uri+'?client_id='+Config.client_id+'&redirect_uri='+this.redirect_uri+'&response_type='+Config.responce_type+'&scope='+Config.scope+'&response_mode='+Config.responce_mode+'&nonce='+this.nonce+'&state='+this.state;
    window.location.href = login_uri;
  }

}
