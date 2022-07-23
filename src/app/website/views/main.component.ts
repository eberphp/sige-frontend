import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { InfoDto } from '../models/info-page.dto';
import { TextService } from '../services/text.service';
import { Data } from '../models/data.model';

@Component({
  selector: 'website-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor(private _textService: TextService) {}

  get info(): InfoDto {
    return this._textService.info!;
  }

  get data(): Data {
    return this._textService.info?.data!;
  }
  ngOnInit(): void {
    this.getMain();
  }

  getMain() {
    this._textService.fetchMain();
  }
}
