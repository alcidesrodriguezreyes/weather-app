import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature',
})
export class TemperaturePipe implements PipeTransform {
  transform(value: number | undefined, ...args: unknown[]): unknown {
    return value ? `${Math.round(value)}°` : null;
  }
}
