import { Component, OnInit } from '@angular/core';
import { BackgroundColor } from 'src/app/shared/enums'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public backgroundColor = BackgroundColor;

  constructor() { }

  ngOnInit(): void {
  }

}
