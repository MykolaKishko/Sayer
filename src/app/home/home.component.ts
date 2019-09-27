import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})  


export class HomeComponent implements OnInit {
 
  constructor(public globalService: GlobalService) {}
  
  ngOnInit() {}
  
  delete(id: number) {
    for (let i = 0; i < this.globalService.ITEMS.length; i++) {
      if(this.globalService.ITEMS[i].id == id) {
        this.globalService.ITEMS.splice(i, 1);
        break;
      }
    }
  }
     
  liClick(item) {
    item.is = !item.is;
  }
}
