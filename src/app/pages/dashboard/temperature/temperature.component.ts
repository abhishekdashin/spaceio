import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { DataService } from '../../../data.service';

@Component({
  selector: 'ngx-temperature',
  styleUrls: ['./temperature.component.scss'],
  templateUrl: './temperature.component.html',
})
export class TemperatureComponent implements OnInit, OnDestroy {

  @Output() temperature = 24;
  temperatureOff = false;
  temperatureMode = 'cool';
  // @Output('tempChange') tempChange = new EventEmitter<Number>();


  @Output() humidity = 87;
  humidityOff = false;
  humidityMode = 'heat';

  colors: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService, private dataService: DataService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe(config => {
      this.colors = config.variables;
    });
  }

  ngOnInit() {
    this.getTemperature();
    this.getHumidity();
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }

  getTemperature() {
    this.dataService.getTemperature().subscribe(
      data => {
        this.temperature = Number(data)
        // this.setTemperature(76);
      },
    );
  }

  getHumidity() {
    this.dataService.getHumidity().subscribe(
      data => {
        this.humidity = Number(data)
      },
    );
  }

  setTemperature(temperature: number) {
    this.dataService.setTemperature(temperature).subscribe();
  }

}
