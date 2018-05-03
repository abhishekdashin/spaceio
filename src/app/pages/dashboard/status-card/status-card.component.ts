import { Component, Input } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="getHueData(on)" [ngClass]="{'off': !on}">
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

  constructor(private dataService: DataService) {}

  getHueData(on: boolean) {
    this.dataService.getHueData(!this.on).subscribe(
      data => {
        this.on = this.on ? false : true;
      },
    );
  }
}
