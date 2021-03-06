import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate',
})
export class LocalDatePipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: string) {
    return new Date(value).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
}
