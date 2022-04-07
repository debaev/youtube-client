/* eslint-disable consistent-return */
import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../search-item.model';

@Pipe({
  name: 'filter',
})
export default class FilterPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cardList: ISearchItem[], searchingValue: string) {
    if (searchingValue.length === 0) {
      return cardList;
    }
    return cardList
      ? cardList.filter(
        (video: ISearchItem) => video.snippet.title.toLocaleLowerCase().trim()
          .includes(searchingValue.toLocaleLowerCase().trim()),
      )
      : cardList;
  }
}
