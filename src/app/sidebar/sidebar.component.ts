import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isSidebarOpen: boolean = false;
  @Input() receivedIsSidebarOpenEvent: boolean;
  @Output() eventToEmitInTableComponent = new EventEmitter<boolean>();

  constructor() { }

  sendEventToParent(message: boolean): void {
    this.eventToEmitInTableComponent.emit(message);
  }
  
  ngOnInit(): void {
  }

}
