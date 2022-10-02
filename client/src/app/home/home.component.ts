import { Component, OnInit } from '@angular/core';
import { CommentPrintType } from '../shared/comment/comment.component';
import { helloWorldComment } from 'src/assets/utf-styles/hello_world';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public helloWorldComment = helloWorldComment;
  public CommentPrintType = CommentPrintType;
  public splitPositionValues = [19, 83];

  constructor() { }

  ngOnInit() {
  }

}
