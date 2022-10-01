import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  public setBodyClasses(){
    const body = document.getElementById('body');
    body!.className = "bg-white dark:bg-gray-800";
  }
}
