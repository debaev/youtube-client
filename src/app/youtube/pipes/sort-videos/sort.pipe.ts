import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cardList: ISearchItem[], isSortAscending: boolean, sortType: string) {
    if (sortType === 'date') {
      return isSortAscending === true
        ? cardList.sort((a, b) => Date.parse(a.snippet.publishedAt)
        - Date.parse(b.snippet.publishedAt))
        : cardList.sort((a, b) => Date.parse(b.snippet.publishedAt)
        - Date.parse(a.snippet.publishedAt));
    }
    if (sortType === 'count') {
      return isSortAscending === true
        ? cardList.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount)
        : cardList.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
    return cardList;
  }
}
