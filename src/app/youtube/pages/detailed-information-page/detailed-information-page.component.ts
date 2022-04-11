import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISearchItem } from '../../models/search-item.model';
import { YoutubeResponseService } from '../../services/youtube-response.service';

@Component({
  selector: 'app-detailed-information-page',
  templateUrl: './detailed-information-page.component.html',
  styleUrls: ['./detailed-information-page.component.scss'],
})
export class DetailedInformationPageComponent implements OnInit {
  videoDetail?: ISearchItem;

  constructor(
    private route: ActivatedRoute,
    private videoService: YoutubeResponseService,
    private location: Location,
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.videoDetail = this.videoService.getVideo(id);
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
