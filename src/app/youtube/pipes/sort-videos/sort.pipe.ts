import { Pipe, PipeTransform } from '@angular/core';
import { ISearchItem } from '../../models/search-item.model';

@Pipe({
  name: 'sort',
})
export default class SortPipe implements PipeTransform {
  // eslint-disable-next-line class-methods-use-this
  transform(cardList: ISearchItem[], searchingValue: string) {
    if (searchingValue === 'date-ascending') {
      return cardList.sort((a, b) => Date.parse(a.snippet.publishedAt)
      - Date.parse(b.snippet.publishedAt));
    }
    if (searchingValue === 'date-descending') {
      return cardList.sort((a, b) => Date.parse(b.snippet.publishedAt)
      - Date.parse(a.snippet.publishedAt));
    }
    if (searchingValue === 'count-ascending') {
      return cardList.sort((a, b) => +a.statistics.viewCount - +b.statistics.viewCount);
    }
    if (searchingValue === 'count-descending') {
      return cardList.sort((a, b) => +b.statistics.viewCount - +a.statistics.viewCount);
    }
    return cardList;
  }
}
