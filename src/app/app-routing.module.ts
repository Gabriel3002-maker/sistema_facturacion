import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home/home.component';
import { DahboardComponent } from './dahboard/dahboard.component';
import { RegisterClientComponent } from './dahboard/formsClient/register-client/register-client.component';
import { EditeRegisterComponent } from './dahboard/formsClient/edite-register/edite-register.component';
import { SellClientComponent } from './dahboard/formsClient/sell-client/sell-client.component';




const routes: Routes = [
  {path: '' , component:HomeComponent},
  {path: 'register' , component:RegisterComponent},
  {path: 'login', component:LoginComponent},
  {path:'dashboard', component:DahboardComponent},
  {path:'registerclient', component:RegisterClientComponent},
  {path: 'editerclient', component:EditeRegisterComponent},
  {path: 'sellclient', component:SellClientComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
