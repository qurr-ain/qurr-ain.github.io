import { ThrowStmt } from '@angular/compiler';
import { Component,Inject, OnInit,Input,ViewChild,ElementRef, OnDestroy } from '@angular/core';
import { CountVisitService } from '../count-visit.service';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit ,OnDestroy{
  Count= "";  
  id:any;


  constructor(@Inject(DOCUMENT) private document: Document,private countService:CountVisitService) { }

  ngOnInit(): void {
    this.getVal();
    this.id = setInterval(() => {
      this.getVal(); 
    }, 100);
  }
  ngOnDestroy(): void {
      if (this.id){
        clearInterval(this.id);
      }
  }
  getVal():void{
    this.Count=this.countService.getCount();
  }
  onRightClick(event: any) {
    event.preventDefault();
  }
}
