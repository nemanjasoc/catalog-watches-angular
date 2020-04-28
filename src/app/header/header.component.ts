import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  showDropdownMenu: boolean = false;
  cartWatches: any[] = [];
  cartPrice: number = 0;

  constructor(private communicationService: CommunicationService) { }

  isSidebarOpen(): void {
    this.communicationService.toggleSideBar = !this.communicationService.toggleSideBar;
  }

  ngOnInit(): void {
  }

}
