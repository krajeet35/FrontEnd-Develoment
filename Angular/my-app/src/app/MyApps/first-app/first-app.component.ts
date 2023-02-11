import { Component } from '@angular/core';
import { firstApp } from 'src/app/firstApp';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent {
  FirstApp!: firstApp[];
  constructor (){
    this.FirstApp= [
      {
        sno:5,
        title: "Full names",
        des: "Write full names",
        active: true
      },
      {
        sno:10,
        title: "Full names",
        des: "Write full names",
        active: true
      },
      {
        sno:2,
        title: "Full names",
        des: "Write full names",
        active: true
      }
    ]
  }
}
