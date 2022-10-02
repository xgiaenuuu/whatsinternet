import { Component, Input, ElementRef } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  private isAlreadySet = false;

  private commentTypeValue!: CommentType;
  private contentsValue!: string;
  private splitPositionValue!: number[];

  @Input()
  get commentType(): CommentType {
    return this.commentTypeValue;
  }
  set commentType(value: CommentType) {
    this.commentTypeValue = value;
    setTimeout(() => this.createComment());
  }

  @Input()
  get contents(): string {
    return this.contentsValue;
  }
  set contents(value: string) {
    this.contentsValue = value;
    setTimeout(() => this.createComment());
  }

  @Input()
  get splitPositions(): number[] {
    return this.splitPositionValue;
  }
  set splitPositions(value: number[]) {
    this.splitPositionValue = value;
    setTimeout(() => this.createComment());
  }

  constructor(private elementRef: ElementRef) { }
  private createComment() {
    if(!this.isAlreadySet && navigator.userAgent.indexOf("Chrome") > -1){
      switch(this.commentType){
        case CommentType.ALL:
          var commentParts : string[] = [];
          if(this.splitPositions){
            this.SplitArrayAfterSpecificLineBreaks(commentParts);
          }
          else{
            this.AutoSplitArray(this.contents ,commentParts);
          }
          commentParts.reverse();
          for(var i = 0; i < commentParts.length; i++){
            const commentPart = document.createComment(commentParts[i]);
            document.body.prepend(commentPart);
          }
          break;
        case CommentType.LINE:
          const comments = this.contents.split('\n').reverse();
          comments.shift();
          comments.pop();
          comments.forEach(comment => {
            const commentPart = document.createComment(comment);
            document.body.prepend(commentPart);
          });
          break;
      }
      this.isAlreadySet = true;
    }
  }

  private SplitArrayAfterSpecificLineBreaks(commentParts: string[]){
    var tempCommentParts = this.contents.split('\n');
    tempCommentParts.shift();
    tempCommentParts.pop();
    for(var i = 0; i <= this.splitPositions.length; i++){
      var tempString: string = "";
      var firstElement;
      var lastElement;
      if(i != this.splitPositions.length){
        firstElement = i == 0 ? 0 : this.splitPositions[i -1];
        lastElement = this.splitPositions[i];
      }
      else{
        firstElement = this.splitPositions[i - 1];
        lastElement = tempCommentParts.length;
      }

      for(var x = firstElement; x < lastElement; x++){
        tempString += "    " + tempCommentParts[x] + "  " + '\n';
      }
      tempString = tempString.slice(4);
      tempString = tempString.slice(0, -3);
      commentParts.push(tempString);
    }
  }

  private AutoSplitArray(content: string, commentParts: string[]){
    var maxTemp = content.split('\n');
    maxTemp.shift();
    maxTemp.pop();
    var tempArray = maxTemp.join("\n").split('');
    //9930 max chrome char display length
    var max = 9930 - maxTemp.length * 7;
    while(tempArray.length > max){
      var cutOut = tempArray.slice(0, max);
      for(var i = 0; i < cutOut.length; i++){
        if(cutOut[max - 1 - i] == '\n'){
          var arrayPart = tempArray.slice(0, max - i - 1).join("");
          tempArray = tempArray.slice(max - i, tempArray.length)
          commentParts.push(this.formatSplitedArray(arrayPart));
          break;
        }
      }
    }
    commentParts.push(this.formatSplitedArray(tempArray.join("")));
  }

  private formatSplitedArray(content: string): string {
    var tempArray = content.split('\n');
    var tempString: string = "";
    for(var x = 0; x < tempArray.length; x++){
      tempString += "    " + tempArray[x] + "  " + '\n';
    }
    tempString = tempString.slice(4);
    tempString = tempString.slice(0, -3);
    return tempString;
  }
}

export enum CommentType{
  ALL,
  LINE,
}
