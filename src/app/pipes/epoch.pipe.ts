import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'epoch',
})
export class EpochPipe extends DatePipe {
  constructor(@Inject(LOCALE_ID) locale: string) {
    super(locale);
  }

  transform(
    value: any,
    format?: string,
    timezone?: string,
    locale?: string
  ): any {
    const formattedDate = super.transform(value, format, timezone, locale);
    return super.transform(value * 1000, format, timezone, locale);
  }
}
