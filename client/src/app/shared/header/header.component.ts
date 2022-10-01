import { Component, OnInit } from '@angular/core';
import { MenuConfig, MenuEntry } from 'src/app/shared/menu.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public menuEntries: MenuEntry[] = MenuConfig.menuEntries;
  constructor() { }

  ngOnInit() {
  }
}
