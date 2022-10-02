import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public setBodyClasses(){
    const body = document.getElementById('body');
    body!.className = "bg-gray-100 dark:bg-gray-800";
  }
}
