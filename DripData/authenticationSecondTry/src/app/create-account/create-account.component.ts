import { Component, ElementRef, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  validationError: String;
  email: any;
  password: any;
  constructor(public auth: AuthService) { }

  createAccountError = this.auth.createEmailError

  ngOnInit(): void {
  }

  getValues(val) {

    this.email = val.email;
    this.password = val.pass;

    if (!val.firstname) {
      this.validationError = "Please enter your first name";
    } else if (!val.lastname) {
      this.validationError = "Please enter your last name";
    }else if(!val.phone){
      this.validationError = "Please enter valid phone number"
    }
    else {
      this.auth.createAccount(this.email, this.password);
    }

  
  }


}
