import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sing-in',
  templateUrl: './sing-in.component.html',
  styleUrls: ['./sing-in.component.css']
})
export class SingInComponent implements OnInit {

  email: any;
  password: any;

  constructor(public auth: AuthService) { }

  ngOnInit(): void {
  
    
  }
  getValues(val){
      console.warn(val)
      this.email = val.username;
      this.password = val.pass;

      console.warn(this.email, this.password);

      this.auth.signIn(this.email, this.password)

    
  }

  


}
