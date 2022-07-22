import { Component, OnInit } from '@angular/core';
import { Data } from '../../models/data.model';
import { Networks } from '../../models/networks.model';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  get data(): Data {
    return this._textService.info?.data!;
  }
  get networks(): Networks {
    return this._textService.info?.networks!;
  }

  constructor(private _textService: TextService) {}

  ngOnInit(): void {}
}
