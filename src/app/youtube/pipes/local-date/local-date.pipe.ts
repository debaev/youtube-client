import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'localDate',
})
export class LocalDatePipe implements PipeTransform {
  transform(value: string) {
    return new Date(value).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
    console.log(this);
  }
}
