import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventAuthError = new BehaviorSubject<String>("");
  eventAuthError$ = this.eventAuthError.asObservable();
  newUser: any;
  

  constructor(private afAuth: AngularFireAuth, private db: AngularFirestore, private router: Router) { }

  createUser(user){
    this.afAuth.signInWithEmailAndPassword(user.email, user.password)
    .then(
       (userCredential)=> {
            this.newUser = user;

            userCredential.user.updateProfile({ 
              displayName: user.name,
            });

            this.insertUserData(userCredential)
            .then( ()=> {this.router.navigate(['/dashboard'])})
       })
    .catch(
       (error)=>{
          this.eventAuthError.next(error)
       } ) 
  }
  insertUserData( userCredential: firebase.auth.UserCredential){
    return this.db.doc(`Users/${userCredential.user.uid}`).set({
      email: this.newUser.email,
      name: this.newUser.name,
      role: 'App user'
    })
  }
}
