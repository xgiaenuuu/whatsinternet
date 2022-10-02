import { Injectable } from '@angular/core';
import { CommentPrintType } from './comment.component';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor() { }

  public handleComments(comments : string[], content : string, commentPrintType : CommentPrintType, splitPositions : number[]){
    switch(commentPrintType){
      case CommentPrintType.ALL:
        var commentLines = content.split('\n');
        commentLines.shift(); //remove first
        commentLines.pop(); //remove last

        if(splitPositions != undefined){
          this.SplitCommentAtSpecificPosition(commentLines, comments, splitPositions)
        }
        else{
          this.SplitCommentAutomatically(commentLines, comments)
        }
        break;
      case CommentPrintType.LINE:
        comments = content.split('\n');
        comments.shift(); //remove first
        comments.pop(); //remove last
        break;
    }
  }

  private SplitCommentAtSpecificPosition(commentLines : string[], comments : string[], splitPositions : number[]){
    for(var i = 0; i <= splitPositions.length; i++){
      var comment = "";
      var firstElement = i == 0 ? 0 : splitPositions[i -1];
      var lastElement = splitPositions[i];

      if(i == splitPositions.length){
        firstElement = splitPositions[i - 1];
        lastElement = commentLines.length;
      }

      for(var x = firstElement; x < lastElement; x++){
        comment += '    ' + commentLines[x] + '  \n';
      }

      comments.push(comment.slice(4, -3));
    }
  }

  private SplitCommentAutomatically(commentLines : string[], comments : string[]){
    var commentAsCharArray = commentLines.join('\n').split('');
    //9930 ist the max amount of chars that will get displayed from a comment in a chromium based browser
    var max = 9930 - commentLines.length * 7; //7 = '    ' + {{comment}} + '  \n'
    while(commentAsCharArray.length > max){
      var commentPart = commentAsCharArray.slice(0, max).join("");
      //search nearest '\n' in commentPart and then remove everithing before this Position from commentAsCharArray
      for(var i = 0; i < commentPart.length; i++){
        if(commentPart[max - 1 - i] == '\n'){
          var comment = commentAsCharArray.slice(0, max - i - 1).join("");
          commentAsCharArray = commentAsCharArray.slice(max - i, commentAsCharArray.length)
          comments.push(this.formatSplitedCommentPartsToComment(comment));
          break;
        }
      }
    }
    comments.push(this.formatSplitedCommentPartsToComment(commentAsCharArray.join("")));
  }

  private formatSplitedCommentPartsToComment(content: string): string {
    var commentLines = content.split('\n');
    var comment: string = '';

    commentLines.forEach(commentLine => {
      comment += '    ' + commentLine + '  \n';
    });

    return comment.slice(4, -3);
  }

}
