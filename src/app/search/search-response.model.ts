import { IMockedResponse } from './search-item.model';

export interface ISearchItem {
  kind: string,
  etag: string,
  pageInfo: {
    totalResults: number,
    resultsPerPage: number,
  },
  items: IMockedResponse[],
}
