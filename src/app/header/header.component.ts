import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showDropdownMenu: boolean = false;

  constructor(public communicationService: CommunicationService) { }

  isSidebarOpen(): void {
    this.communicationService.toggleSideBar = !this.communicationService.toggleSideBar;
  }

  removeCartWatch(cartWatch: any) {
    cartWatch.isAddButtonDisabled = false;
    let newCartWatches = [];

    for (let i = 0; i < this.communicationService.cartWatches.length; i++) {
      let currentCartWatch = this.communicationService.cartWatches[i];

      if (currentCartWatch.id !== cartWatch.id) {
          newCartWatches.push(currentCartWatch)
      }

    }

    let newCartPrice;

    if (cartWatch.quantity === 1) {
      newCartPrice = (this.communicationService.cartPrice - cartWatch.listing_price);
      cartWatch.quantity = 0;
    } else if (cartWatch.quantity > 1) {
      newCartPrice = (this.communicationService.cartPrice - (cartWatch.listing_price * cartWatch.quantity));
      cartWatch.quantity = 0;
    }

    this.communicationService.cartWatches = newCartWatches;
    this.communicationService.cartPrice = newCartPrice;
  }

  ngOnInit(): void {
  }

}
