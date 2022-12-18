import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-testing',
  templateUrl: './child-testing.component.html',
  styleUrls: ['./child-testing.component.scss']
})
export class ChildTestingComponent {
  @Input() item: any;
  @Output() onSelecteItem = new EventEmitter<any>();

  clickItem() {
    // let wrongItem = {id:0, name: "Wrong item"}
    // this.onSelecteItem.emit(wrongItem); 
    this.onSelecteItem.emit(this.item); 
  }
}
