import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
