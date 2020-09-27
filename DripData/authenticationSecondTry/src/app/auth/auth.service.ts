import { Injectable } from '@angular/core';
import { AngularFireAuth, AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  createEmailError: any;

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  signIn(email, password){
    this.afAuth.signInWithEmailAndPassword(email, password)
    .then( (result)=> {
      this.router.navigate(['dashboard'])
    } )
    .catch( (e)=> {

      if(e.code == "auth/user-not-found"){
        alert('Incorrect Email Address')
        console.log(e)
      }
      else if(e.code == "auth/invalid-email"){
        alert(`Please enter a valid email`);
        console.log(e)
      }
      else if(e.code == "auth/wrong-password"){
        alert("Incorrect Password")
      }
      else{
        alert(e);
        console.log(e)
      }


    })
  }

  createAccount(email, password){
    this.afAuth.createUserWithEmailAndPassword(email, password)
    .then( 
      (result)=>{
          console.log(result);
          this.router.navigate(['dashboard'])
      }
    )
    .catch(
      (e)=>{
        console.log(e);
        alert(`${e}`)
        this.createEmailError = e
      }
    )
  }

  signOut(){

    this.afAuth.signOut().then( (result)=> {
      alert('Logged Out')
    } )
    this.router.navigate(['login'])
  }
}
