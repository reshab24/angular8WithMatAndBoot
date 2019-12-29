import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form:any;
  hide:Boolean;
  
  constructor(
    private _FB:FormBuilder,
    private authService:AuthServiceService
    ) {
   
   }

  ngOnInit() {
    this.form=this._FB.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })

    console.log(this.form.controls.username,"username");
  }

  getErrorMessage() {
    // return this.form.controls.username.hasError('required') ? 'You must enter a value' :
    //     this.form.hasError('email') ? 'Not a valid email' :
    //         '';
  }
  login(){
    this.authService.login();
  }
}
