import { Component, Input, OnInit } from '@angular/core';
import { BackgroundColor } from 'src/app/shared/enums'

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() type?: string;
  @Input() text?: string;
  @Input() backgroundColor?: BackgroundColor;

  constructor() { }

  ngOnInit(): void {
  }

}
