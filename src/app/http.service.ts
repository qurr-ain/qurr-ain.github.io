import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  updateUrl='https://api.countapi.xyz/update/elephunks/webele/?amount=1';
  getUrl='https://api.countapi.xyz/get/elephunks/webele';
    
  constructor(private httpClient:HttpClient) { }
  getCount(){
    return this.httpClient.get(this.getUrl);
  }
  updateCount(){
    return this.httpClient.get(this.updateUrl);
  }
}
