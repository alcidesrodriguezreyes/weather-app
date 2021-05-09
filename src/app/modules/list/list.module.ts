import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list/list.component';
import { WeatherTileModule } from '../weather-tile/weather-tile.module';
import { WeatherService } from 'src/app/services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { DetailComponent } from './detail/detail.component';
import { ForecastComponent } from './forecast/forecast.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [ListComponent, DetailComponent, ForecastComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    WeatherTileModule,
    HttpClientModule,
    SharedModule,
  ],
  providers: [WeatherService],
})
export class ListModule {}
