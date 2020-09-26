import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule  } from '@angular/fire/';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp( {
        apiKey:'AIzaSyDe6y7CWqj6-OK-E8uhrua3DMoTxmJ6-rQ',
        authDomain: 'data-drip-bootstrap-auth.firebaseapp.com',
        databaseURL:'https://data-drip-bootstrap-auth.firebaseio.com',
        projectId:  'data-drip-bootstrap-auth',
        storageBucket:'data-drip-bootstrap-auth.appspot.com',
        messagingSenderId: '833815555606',
        appId: '1:833815555606:web:14e467516ea8dee0ab0f37',
        measurementId: 'G-FK8B0NE70C'   
    } ),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
