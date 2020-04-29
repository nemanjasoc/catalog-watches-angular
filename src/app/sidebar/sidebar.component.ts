import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public communicationService: CommunicationService) { }

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

  increaseWatchNumberAndSum(cartWatch: any) {
    let newCartWatches = [];
    cartWatch.quantity = cartWatch.quantity + 1;

    for (let i = 0; i < this.communicationService.cartWatches.length; i++) {
      let currentCartWatch = this.communicationService.cartWatches[i];

      if (currentCartWatch.id === cartWatch.id) {
        newCartWatches.push(cartWatch)
      } else {
        newCartWatches.push(currentCartWatch)
      }

    }

    if (cartWatch.quantity > 1) {
      cartWatch.isDecreaseQuantityDisabled= false;
    }

    let newCartPrice = (this.communicationService.cartPrice + cartWatch.listing_price);

    this.communicationService.cartWatches = newCartWatches;
    this.communicationService.cartPrice = newCartPrice;
  }

  decreaseWatchNumberAndSum(cartWatch: any) {
    let newCartWatches = [];
    
    if (cartWatch.quantity > 0) {
      cartWatch.quantity = cartWatch.quantity - 1;
    }

    for (let i = 0; i < this.communicationService.cartWatches.length; i++) {
      let currentCartWatch = this.communicationService.cartWatches[i];

      if (currentCartWatch.id === cartWatch.id) {
        newCartWatches.push(cartWatch)
      } else {
        newCartWatches.push(currentCartWatch)
      }

    }

    if (cartWatch.quantity === 1) {
      cartWatch.isDecreaseQuantityDisabled = true;
    }

    let newCartPrice = (this.communicationService.cartPrice - cartWatch.listing_price);
    
    this.communicationService.cartWatches = newCartWatches;
    this.communicationService.cartPrice = newCartPrice;
  }
  
  ngOnInit(): void {
  }

}
