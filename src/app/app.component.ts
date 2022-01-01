import { Component,Inject,ViewChild,ElementRef,OnInit,Input } from '@angular/core';
import { HttpService } from './http.service';
import { CountVisitService } from './count-visit.service';
import { DOCUMENT } from '@angular/common';
import { gsap } from 'gsap';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ElephunksNft';
  Count="";
  interval:any;

  @ViewChild('menu', { static: true }) menu!: ElementRef<
  HTMLDivElement
  >;
  constructor(@Inject(DOCUMENT) private document: Document,private httpService:HttpService,private countService:CountVisitService){}
  ngOnInit(){    
    this.UpdateCounter();
    this.initialAnimations();
    this.interval = setInterval(() => {
      this.getCount(); 
    }, 2000);
  }
  ngOnDestroy()
  {
  }
  UpdateCounter():void{
    this.httpService.updateCount().subscribe(
      updateData=>{
       this.Count=Object.values(updateData).toString();
       this.countService.setCount(this.Count)
      }
    );
  }
  getCount():void{
    this.httpService.getCount().subscribe(
      data=>{
       this.Count=Object.values(data).toString();
       this.countService.setCount(this.Count)
      }
    );
  }
  
  initialAnimations(): void {
    gsap.from(this.menu.nativeElement.childNodes, {
      duration: 0.5,
      opacity: 0,
      y: -20,
      stagger: 0.2,
      delay: 0.5,
    });
  }
}


