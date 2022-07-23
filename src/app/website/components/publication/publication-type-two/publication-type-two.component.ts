import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Publication } from '../../../models/publication.model';

@Component({
  selector: 'app-publication-type-two',
  templateUrl: './publication-type-two.component.html',
  styleUrls: ['./publication-type-two.component.css'],
})
export class PublicationTypeTwoComponent implements OnInit {
  storageUrl: string = environment.baseStorageUrl;
  @Input() publication!: Publication;

  constructor() {}

  ngOnInit(): void {}
}
