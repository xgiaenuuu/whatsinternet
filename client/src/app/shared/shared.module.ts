import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { InputComponent } from './components/forms/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { ShowPasswordSvgComponent } from './svg/show-password-svg/show-password-svg.component';
import { BurgerMenuSvgComponent } from './svg/burger-menu-svg/burger-menu-svg.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, InputComponent, ButtonComponent, ShowPasswordSvgComponent, BurgerMenuSvgComponent, CommentComponent],
  exports: [HeaderComponent, InputComponent, ButtonComponent, CommentComponent],
  providers: [CommentComponent],
})
export class SharedModule { }
