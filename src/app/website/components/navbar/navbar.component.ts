import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Data } from '../../models/data.model';
import { Service } from '../../models/service.model';
import { Title } from '../../models/title.model';
import { TextService } from '../../services/text.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  storageUrl: string = environment.baseStorageUrl;
  get data(): Data {
    return this._textService.info?.data!;
  }
  get title(): Title {
    return this._textService.info?.title!;
  }
  get services(): Service[] {
    return this._textService.info?.services!;
  }
  constructor(private _textService: TextService) {}

  ngOnInit(): void {}
}
