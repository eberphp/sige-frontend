import { Component, Input, OnInit } from '@angular/core';
import { Publication } from 'src/app/website/models/publication.model';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-publication-type-three',
  templateUrl: './publication-type-three.component.html',
  styleUrls: ['./publication-type-three.component.css'],
})
export class PublicationTypeThreeComponent implements OnInit {
  storageUrl: string = environment.baseStorageUrl;
  @Input() publication!: Publication;
  constructor() {}

  ngOnInit(): void {}
}
