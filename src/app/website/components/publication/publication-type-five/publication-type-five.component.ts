import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/website/models/publication.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publication-type-five',
  templateUrl: './publication-type-five.component.html',
  styleUrls: ['./publication-type-five.component.css'],
})
export class PublicationTypeFiveComponent implements OnInit {
  storageUrl: string = environment.baseStorageUrl;
  @Input() publication!: Publication;
  constructor() {}

  ngOnInit(): void {}
}
