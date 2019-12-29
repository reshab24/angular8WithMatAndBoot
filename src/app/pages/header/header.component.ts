import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;  
  hideHeader:boolean;
  constructor(private router: Router ,private authService:AuthServiceService ) {
  console.log(this.router.routerState.snapshot,"url");
  this.hideHeader=this.router.routerState.snapshot.url==""?true:false;
  console.log( this.hideHeader," this.hideHeader");
   }
  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    console.log( this.isLoggedIn$,"this.isLoggedIn$");
  }

}
