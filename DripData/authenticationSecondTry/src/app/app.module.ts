import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    SingInComponent,
    DashboardComponent,
    CreateAccountComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey:     'AIzaSyDe6y7CWqj6-OK-E8uhrua3DMoTxmJ6-rQ',
      authDomain: 'data-drip-bootstrap-auth.firebaseapp.com',
      databaseURL:'https://data-drip-bootstrap-auth.firebaseio.com',
      projectId:  'data-drip-bootstrap-auth',
      storageBucket:  'data-drip-bootstrap-auth.appspot.com',
      messagingSenderId: '833815555606',
      appId: '1:833815555606:web:14e467516ea8dee0ab0f37',
      measurementId: 'G-FK8B0NE70C'
    }),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
