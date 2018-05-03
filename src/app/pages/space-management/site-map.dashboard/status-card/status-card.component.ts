import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="showSiteMap()" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;

  constructor(private router: Router) {}
  showSiteMap() {
    this.on = !this.on;
    this.router.navigate(['/pages/space-management/site-map']);
  }
}
