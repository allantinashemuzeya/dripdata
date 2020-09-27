import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  firstname: any;
  lastname: any;
  email: any;
  password: any;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  }

  getValues(val){

    console.warn(val)

    this.email = val.email;
    this.password = val.pass;

    console.log(this.email, this.password);

    this.auth.createAccount(this.email, this.password);
    // this.auth.insertData(this.firstname, this.lastname, this.email);
 
}


}
