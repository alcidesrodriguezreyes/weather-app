import { Component, Input, OnInit } from '@angular/core';
import { OpenWeatherResponse } from 'src/app/interfaces/open-weather-response';

@Component({
  selector: 'app-weather-tile',
  templateUrl: './weather-tile.component.html',
  styleUrls: ['./weather-tile.component.scss'],
})
export class WeatherTileComponent implements OnInit {
  @Input() weather: OpenWeatherResponse | null = null;

  constructor() {}

  ngOnInit(): void {}
}
