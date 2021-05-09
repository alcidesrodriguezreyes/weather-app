import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeatherTileComponent } from './weather-tile/weather-tile.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [WeatherTileComponent],
  imports: [CommonModule, SharedModule],
  exports: [WeatherTileComponent],
})
export class WeatherTileModule {}
