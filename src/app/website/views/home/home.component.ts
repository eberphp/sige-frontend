import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Button } from '../../models/button.model';
import { Data } from '../../models/data.model';
import { Publication } from '../../models/publication.model';
import { Service } from '../../models/service.model';
import { Slider } from '../../models/slider.model';
import { Testimonial } from '../../models/testimonial.model';
import { Title } from '../../models/title.model';
import { TextService } from '../../services/text.service';
import { environment } from '../../../../environments/environment';
import SwiperCore, { Autoplay, Parallax, Pagination, Navigation } from 'swiper';
import { Networks } from '../../models/networks.model';

SwiperCore.use([Autoplay, Parallax, Pagination, Navigation]);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom,
})
export class HomeComponent implements OnInit {
  storageUrl: string = environment.baseStorageUrl;
  get data(): Data {
    return this._textService.info?.data!;
  }
  get title(): Title {
    return this._textService.info?.title!;
  }
  get sliders(): Slider[] {
    return this._textService.info?.sliders!;
  }
  get services(): Service[] {
    return this._textService.info?.services!;
  }
  get buttons(): Button[] {
    return this._textService.info?.buttons!;
  }
  get publications(): Publication[] {
    return this._textService.info?.publications!;
  }
  get testimonials(): Testimonial[] {
    return this._textService.info?.testimonials!;
  }

  get networks(): Networks {
    return this._textService.info?.networks;
  }

  constructor(private _textService: TextService) {}

  ngOnInit(): void {}

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
