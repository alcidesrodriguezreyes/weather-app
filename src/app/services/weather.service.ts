import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { publishReplay, refCount } from 'rxjs/operators';
import { Forecast } from '../interfaces/forecast';
import { OpenWeatherResponse } from '../interfaces/open-weather-response';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  // TODO: move to a config file and get it with a service
  apiKey = 'e2b7ad3d3b8aaad7b6def6921d871012';
  unit = 'metric';

  constructor(private http: HttpClient) {}

  getWeather(city: string): Observable<OpenWeatherResponse> {
    return this.http
      .get<OpenWeatherResponse>(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${this.apiKey}&units=${this.unit}`
      )
      .pipe(publishReplay(1), refCount());
  }

  getForecast(city: string) {
    return this.http
      .get<Forecast>(
        `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${this.apiKey}&units=${this.unit}&cnt=7`
      )
      .pipe(publishReplay(1), refCount());
  }
}
