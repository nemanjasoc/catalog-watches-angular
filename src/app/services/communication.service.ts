import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  toggleSideBar = false;
  cartWatches: any[] = [];
  cartPrice: number = 0;

  constructor() { }

}
