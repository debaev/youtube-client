import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SortFilterService from 'src/app/core/services/sort-filter.service';
import { YoutubeResponseService } from '../../services/youtube-response.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  videoDetail?: any;

  constructor(
    private route: ActivatedRoute,
    private youtubeResponseService: YoutubeResponseService,
    private sortService: SortFilterService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.youtubeResponseService.fetchVideo(id).subscribe((res) => {
          this.videoDetail = res;
        });
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
