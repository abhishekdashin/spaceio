import { Component, OnInit, Input, Output } from '@angular/core';
import { DataService } from '../../../data.service';

@Component({
  selector: 'ngx-ac-status-card',
  styleUrls: ['./ac-status-card.component.scss'],
  template: `
    <nb-card (click)="getACMode()" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon {{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title">{{ title }}</div>
        <div class="status">{{ acMode }}</div>
      </div>
    </nb-card>
  `,
})
export class AcStatusCardComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
  @Output() acMode: string = 'cooling';

  constructor(private dataService: DataService) {}

  ngOnInit() {
     this.getACMode();
  }

  getACMode() {
    this.dataService.getACMode().subscribe(
      data => {
        this.acMode = JSON.stringify(data);
        this.on = (this.acMode === '\"cooling\"') ? true : false;
      },
    );
  }

  // setAcMode() {
  //   this.acMode = (this.acMode === 'cooling') ? 'off' : 'cooling';
  //   this.dataService.setAcMode(this.acMode).subscribe(
  //     data => {
  //       // this.acMode = JSON.stringify(data);
  //       this.on = (this.acMode === '\"cooling\"') ? true : false;
  //     },
  //   );
  // }

}
