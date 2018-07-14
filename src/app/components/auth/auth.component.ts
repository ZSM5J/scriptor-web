import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Subscription } from 'rxjs';
import { Http } from "@angular/http";
import { SessionService } from '../../services/session.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {

  code : string;
  in_state : string;
  out_state : string;
  nonce : string;
  private querySubscription: Subscription;
  http: Http;

  constructor(private route:ActivatedRoute, private sessionService:SessionService, private router:Router ) {

    // get state and nonce from storage to compare. if you know better way to pass it - use it)
    this.in_state = localStorage.getItem("state")
    this.nonce = localStorage.getItem("nonce")

    this.querySubscription = route.queryParams.subscribe(
      (queryParam: any) => {
        //get state from result query
        this.out_state = queryParam['state'];
        if (this.in_state != this.out_state) {
          // maybe throw error etc.
          router.navigate(['']);
        }

        this.code = queryParam['code'];
        if (this.code != undefined) {
          this.sessionService.getSession(this.code, this.nonce).subscribe((data: any) => {
            let auth = JSON.parse(data._body);
            if (auth.err_code == 0) {
              localStorage.setItem('name', auth.name);
              localStorage.setItem('email', auth.email);
              localStorage.setItem('session', auth.session);
              router.navigate(['/dashboard']);
            }
            else {
              // populate error etc
              router.navigate(['']);
            }
          })
        }
        else {
          router.navigate(['']);
        }
      },
      err => {
        console.log('Something went wrong!');
      }
    );
  }

  ngOnInit() {
  }

  ngOnDestroy(){
        this.querySubscription.unsubscribe();
    }

}
