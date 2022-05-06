import { Store } from '@ngrx/store';
import { Injectable } from '@angular/core';
import {
  debounceTime, distinctUntilChanged, map, mergeMap, Observable, of, Subject, switchMap,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ISearchResponse } from '../models/search-response.model';
import { searchVideos } from '../../redux/actions/videos.actions';

@Injectable({
  providedIn: 'root',
})
export class YoutubeResponseService {
  public queryValue = new Subject<string>();

  constructor(
    private http: HttpClient,
    private store: Store,
  ) {
    this.subscribe();
  }

  subscribe() {
    return this.queryValue.pipe(
      this.liveSearch((res) => this.fetchvideos(res)),
    ).subscribe((res: ISearchResponse) => this.store
      .dispatch(searchVideos({ loadedVideo: res.items })));
  }

  searchPosts(userId: string) {
    this.queryValue.next(userId);
  }

  fetchvideos(name: string): Observable<any> {
    if (name.length >= 3) {
      return this.http.get<any>(`search?&type=video&part=snippet&maxResults=10&q=${name}`).pipe(
        map((videoResponse: any) => {
          const idList: string[] = videoResponse.items
            .map((item: any) => item.id.videoId);
          return idList;
        }),
        mergeMap((idList) => this.http.get<ISearchResponse>(`videos?&id=${idList.join(',')}&part=snippet,statistics`)),
      );
    }
    return of([]);
  }

  // eslint-disable-next-line class-methods-use-this
  fetchVideo(id: string): Observable<any> {
    const video = this.http.get<any>(`videos?&id=${id}&part=snippet,statistics`).pipe(
      map((videoId: any) => videoId.items[0]),
    );
    return video;
  }

  // eslint-disable-next-line class-methods-use-this
  liveSearch<T, R>(
    dataCb: (query: T) => Observable<R>,
    delay = 550,
  ) {
    return (source$: Observable<T>) => source$.pipe(
      debounceTime(delay),
      distinctUntilChanged(),
      switchMap(dataCb),
    );
  }
}
