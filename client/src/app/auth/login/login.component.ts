import { Component, OnInit } from '@angular/core';
import { BackgroundColor } from 'src/app/shared/enums';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public backgroundColor = BackgroundColor;

  constructor() { }

  ngOnInit(): void {
  }

}
