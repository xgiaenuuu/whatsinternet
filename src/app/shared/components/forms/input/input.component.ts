import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() public id?: string;
  @Input() public label?: string;
  @Input() public placeholder?: string;
  @Input() public type: string = 'text'
  @Input() public showPasswordButton: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
