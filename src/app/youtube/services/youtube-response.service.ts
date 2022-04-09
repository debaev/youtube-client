import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import response from '../../../youtube-response/youtube-response';

@Injectable({
  providedIn: 'root',
})
export default class YoutubeResponseService {
  constructor() { }

  getVideos(): Observable<ISearchItem[]> {
    const videos = of(response.items);
    return videos;
  }
}
