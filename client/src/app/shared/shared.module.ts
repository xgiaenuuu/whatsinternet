import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CommentComponent
  ],
  exports: [
    CommentComponent
  ],
  providers: [
    CommentComponent
  ]
})
export class SharedModule { }
