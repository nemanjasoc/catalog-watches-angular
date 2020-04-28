import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDropdownMenu: boolean = false;
  cartWatches: any[] = [];
  cartPrice: number = 0;
  sidebarToggle: boolean = false;

  constructor() { }

  isSidebarOpen(): void {
    this.sidebarToggle = !this.sidebarToggle;
  }

  ngOnInit(): void {
  }

}
