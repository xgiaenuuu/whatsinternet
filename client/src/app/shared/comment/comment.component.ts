import { Component, Input, ElementRef } from '@angular/core';
import { CommentService } from './comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  private isAlreadySet = false;

  private commentPrintTypeValue!: CommentPrintType;
  private contentValue!: string;
  private splitPositionValues!: number[];

  @Input()
  get commentPrintType(): CommentPrintType {
    return this.commentPrintTypeValue;
  }
  set commentPrintType(value: CommentPrintType) {
    this.commentPrintTypeValue = value;
    setTimeout(() => this.createComment());
  }

  @Input()
  get content(): string {
    return this.contentValue;
  }
  set content(value: string) {
    this.contentValue = value;
    setTimeout(() => this.createComment());
  }

  @Input()
  get splitPositions(): number[] {
    return this.splitPositionValues;
  }
  set splitPositions(value: number[]) {
    this.splitPositionValues = value;
    setTimeout(() => this.createComment());
  }

  constructor(private elementRef: ElementRef) { }
  private createComment() {
    if(!this.isAlreadySet && navigator.userAgent.indexOf("Chrome") > -1){
      var comments : string[] = [];
      new CommentService().handleComments(comments, this.content, this.commentPrintType, this.splitPositions)

      comments.reverse();
      comments.forEach(comment => {
        var htmlComment = document.createComment(comment);
        document.body.prepend(htmlComment);
      });
      this.isAlreadySet = true;
    }
  }
}

export enum CommentPrintType{
  ALL,
  LINE,
}
