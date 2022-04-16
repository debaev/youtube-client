import { Component, OnInit } from '@angular/core';
// import response from '../../../routube-response/youtube-response';
import { LoginService } from 'src/app/auth/services/login.service';
import { YoutubeResponseService } from '../../services/youtube-response.service';
import { ISearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export default class SearchResultsComponent implements OnInit {
  constructor(
    public youtubeResponseService: YoutubeResponseService,
    private loginService: LoginService,
  ) {}

  videos: ISearchItem[] = [];

  ngOnInit(): void {
    this.getVideos();
  }

  getVideos(): void {
    this.youtubeResponseService
      .getVideos()
      // eslint-disable-next-line no-return-assign
      .subscribe((videos) => (this.videos = videos));
  }
}
