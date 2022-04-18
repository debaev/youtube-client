import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ISearchItem } from '../models/search-item.model';
import response from '../../shared/youtube-response/youtube-response';

@Injectable({
  providedIn: 'root',
})
export class YoutubeResponseService {
  isVideosShown = false;

  getVideos(): Observable<ISearchItem[]> {
    const videos = of(response.items);
    console.log(this);
    return videos;
  }

  getVideo(id: string): ISearchItem {
    const video = response.items.find((item) => item.id === id)!;
    console.log(this);
    return video;
  }
}
