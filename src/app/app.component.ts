import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-header></app-header>
            <app-banner></app-banner>
            <app-table></app-table>
            <app-box></app-box>
            <app-footer></app-footer>`
})
export class AppComponent {
  title = 'catalog-watches';
}
