import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title: string = 'whatsinternet';

  constructor(private appService: AppService){}

  ngOnInit(): void {
    this.appService.setBodyClasses();
  }
}
