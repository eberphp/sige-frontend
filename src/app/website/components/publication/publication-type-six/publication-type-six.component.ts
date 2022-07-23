import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { Publication } from 'src/app/website/models/publication.model';
import { environment } from 'src/environments/environment';
import SwiperCore, { Parallax, Pagination, Navigation } from 'swiper';

SwiperCore.use([Parallax, Pagination, Navigation]);
@Component({
  selector: 'app-publication-type-six',
  templateUrl: './publication-type-six.component.html',
  styleUrls: ['./publication-type-six.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class PublicationTypeSixComponent implements OnInit {
  storageUrl: string = environment.baseStorageUrl;
  @Input() publication!: Publication;
  constructor() {}

  ngOnInit(): void {}
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
