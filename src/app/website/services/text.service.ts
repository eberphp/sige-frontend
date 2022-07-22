import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InfoDto } from '../models/info-page.dto';

@Injectable({
  providedIn: 'root',
})
export class TextService {
  private baseUrl = environment.serverUrl;

  private _isBusy = new BehaviorSubject<boolean>(true);

  info!: InfoDto;

  get isBusy(): Observable<boolean> {
    return this._isBusy.asObservable();
  }

  constructor(private http: HttpClient) {}

  fetchMain() {
    this._isBusy.next(true);
    this.http
      .get<{
        success: boolean;
        info: InfoDto;
      }>(`${this.baseUrl}/website/index`)
      .subscribe((result) => {
        this.info = result.info;
        this._isBusy.next(false);
      });
  }
}
