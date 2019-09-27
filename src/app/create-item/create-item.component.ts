import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent implements OnInit {

  constructor(public globalService: GlobalService) { }

 
  addLi(name: string) {
    
    let i = this.globalService.ITEMS.length + 1;

    if(name.trim()) { 
      this.globalService.ITEMS.push({is: false, id: i, name: name, comment: []});
    }
  }

  ngOnInit() {

  }

}
