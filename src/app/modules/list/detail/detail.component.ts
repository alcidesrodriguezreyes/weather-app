import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, merge, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { CITIES } from 'src/app/constants/cities';
import { Forecast } from 'src/app/interfaces/forecast';
import { OpenWeatherResponse } from 'src/app/interfaces/open-weather-response';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  weather: OpenWeatherResponse | null = null;
  forecast: Forecast | null = null;
  index: number = 0;
  selectedCity: string = '';

  constructor(
    private route: ActivatedRoute,
    private weatherService: WeatherService
  ) {}

  ngOnInit(): void {
    const arraySource: Observable<OpenWeatherResponse | Forecast>[] = [];

    this.route.params
      .pipe(
        tap((params) => {
          this.selectedCity = params.city;
          arraySource.push(this.weatherService.getWeather(params.city));
          arraySource.push(this.weatherService.getForecast(params.city));
        }),
        switchMap((source) => {
          return forkJoin(arraySource);
        })
      )
      .subscribe(([weatherResponse, forecast]) => {
        this.weather = <OpenWeatherResponse>weatherResponse;
        this.forecast = <Forecast>forecast;
        this.index = CITIES.map((city) => city.toLowerCase()).findIndex(
          (city) => city === this.selectedCity.toLowerCase()
        );
      });
  }
}
