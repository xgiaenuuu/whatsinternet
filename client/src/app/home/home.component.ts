import { Component, OnInit } from '@angular/core';
import { CommentType } from '../shared/comment/comment.component';
import { helloWorldComment } from 'src/assets/utf-styles/hello_world';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public commentType = CommentType;
  public helloWorldCommentValue = helloWorldComment;
  public splitPositionValue = [19];

  constructor() { }

  ngOnInit() {
  }

}
