import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatMenuModule } from '@angular/material/menu';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgApexchartsModule } from "ng-apexcharts";

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { DahboardComponent } from './dahboard/dahboard.component';
import { AuthService } from './services/Auth.service';
import { UserComponent } from './dahboard/user/user.component';
import { MenuComponent } from './dahboard/menu/menu.component';
import { CerrarComponent } from './dahboard/cerrar/cerrar.component';
import { RegisterClientComponent } from './dahboard/formsClient/register-client/register-client.component';
import { EditeRegisterComponent } from './dahboard/formsClient/edite-register/edite-register.component';
import { SellClientComponent } from './dahboard/formsClient/sell-client/sell-client.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    DahboardComponent,
    UserComponent,
    MenuComponent,
    CerrarComponent,
    RegisterClientComponent,
    EditeRegisterComponent,
    SellClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
    MatSelectModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatSidenavModule,
    NgApexchartsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatSnackBarModule,
    BrowserAnimationsModule
   
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
