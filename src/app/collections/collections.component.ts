import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { IMAGE } from '../image-list';


@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent implements OnInit {
  collection=IMAGE;
  constructor() { }

  ngOnInit(): void {
  }
  onActivate(event:any) {
    setTimeout(function(){window.scrollTo(0,0)} ,1500);   }
}
