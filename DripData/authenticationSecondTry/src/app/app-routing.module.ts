import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from './create-account/create-account.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path: 'login', component: SingInComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'createAccount', component: CreateAccountComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
