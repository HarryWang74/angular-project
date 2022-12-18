import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isOn = false;
  clicked() { this.isOn = !this.isOn; }

  items = [
    {id: 1, name: "item1"},
    {id: 2, name: "item2"},
    {id: 3, name: "item4"},
  ]
  get message() { return `The light is ${this.isOn ? 'On' : 'Off'}`; }

  onSelectItem(e: any){
    console.log(e)
  }
}
