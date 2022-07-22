import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { InfoDto } from '../models/info-page.dto';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl = environment.serverUrl;

  constructor(private http: HttpClient) {}

  getMain() {
    return this.http.get<{
      success: boolean;
      info: InfoDto;
    }>(`${this.baseUrl}/website/index`);
  }
}
