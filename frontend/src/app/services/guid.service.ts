import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuidService {
  private apiUrl = 'https://guidgenerator20220724162309.azurewebsites.net/guid';

  http: HttpClient;

  constructor(http: HttpClient) { 
    this.http = http;
  }

  getGuid(){
    return this.http.get<string>(this.apiUrl);
  }
}
