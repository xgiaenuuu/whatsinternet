import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthComponent, LoginComponent, RegisterComponent, LogoutComponent]
})
export class AuthModule { }
