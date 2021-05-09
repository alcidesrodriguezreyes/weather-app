import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { TemperaturePipe } from './pipes/temperature.pipe';
import { SpeedPipe } from '../pipes/speed.pipe';
import { RouterModule } from '@angular/router';
import { EpochPipe } from '../pipes/epoch.pipe';

@NgModule({
  declarations: [HeaderComponent, TemperaturePipe, SpeedPipe, EpochPipe],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, TemperaturePipe, SpeedPipe, EpochPipe],
})
export class SharedModule {}
