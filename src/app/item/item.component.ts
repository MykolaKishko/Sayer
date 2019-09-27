import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';
import { Item } from '../item';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
}) 
export class ItemComponent implements OnInit {

  selectedItem: Item;
  filterName : string = null;
  clearValue: string;
  
  constructor(private globalService: GlobalService, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.getItem();
  }

  

  add(name: string) {
    if(name.trim()) {
      this.selectedItem.comment.push(name); 
    }
    this.clearValue = '';
}
  

  getItem(){
    const id = +this.route.snapshot.paramMap.get('id');
    // for(let i = 0; i < this.globalService.ITEMS.length; i++) {
    //   if(this.globalService.ITEMS[i].id === id){
    //     this.selectedItem = this.globalService.ITEMS[i];
    //   }
    // }
    this.selectedItem = this.globalService.ITEMS.find(elem => elem.id === id);

  }

}
