import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Forecast } from 'src/app/interfaces/forecast';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss'],
})
export class ForecastComponent implements OnInit {
  @Input() forecast: Forecast | null = null;

  constructor() {}

  ngOnInit(): void {}
}
