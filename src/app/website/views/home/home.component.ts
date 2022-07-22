import { Component, OnInit } from '@angular/core';
import { Button } from '../../models/button.model';
import { Data } from '../../models/data.model';
import { Publication } from '../../models/publication.model';
import { Service } from '../../models/service.model';
import { Slider } from '../../models/slider.model';
import { Testimonial } from '../../models/testimonial.model';
import { Title } from '../../models/title.model';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  images!: any[];

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
  constructor(private _textService: TextService) {}

  ngOnInit(): void {}
}
