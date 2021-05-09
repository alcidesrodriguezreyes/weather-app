import { Component, OnInit } from '@angular/core';
import { forkJoin } from 'rxjs';
import { from } from 'rxjs/internal/observable/from';
import { switchMap } from 'rxjs/operators';
import { CITIES } from 'src/app/constants/cities';

import { OpenWeatherResponse } from 'src/app/interfaces/open-weather-response';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  weatherList: OpenWeatherResponse[] = [];

  cities: string[] = CITIES;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getInitialValues();
  }

  getInitialValues() {
    const arraySource = this.cities.map((city) =>
      this.weatherService.getWeather(city)
    );
    forkJoin(arraySource).subscribe(
      (response) => (this.weatherList = response)
    );
  }
}
