import { Injectable } from '@angular/core';
import { CountVal,Set } from './countdata';

@Injectable({
  providedIn: 'root'
})
export class CountVisitService {
  

  constructor() { }
  
  getCount() {
    return CountVal;
  }
  
 setCount(val:string){
    Set(val);
 }
}
