import { Component, EventEmitter, Input, Output } from '@angular/core';
import { firstApp } from 'src/app/firstApp';

@Component({
  selector: 'app-first-app-item',
  templateUrl: './first-app-item.component.html',
  styleUrls: ['./first-app-item.component.css']
})
export class FirstAppItemComponent {
  @Input() firstApp!: firstApp;
  @Output() itemDelete: EventEmitter<firstApp> =new EventEmitter();
  delete(firstApp: firstApp){
    this.itemDelete.emit(firstApp);
    console.log("Click function envoked")
  }
  constructor(){};
}
