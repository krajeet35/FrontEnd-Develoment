import { Component } from '@angular/core';
import { firstApp } from 'src/app/firstApp';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.css']
})
export class FirstAppComponent {
  FirstApp!: firstApp[];
  deleteItem(firstApp: firstApp){
   console.log(firstApp);
   let index= this.FirstApp.indexOf(firstApp);
   this.FirstApp.splice(index,1);
  }
  constructor (){
    this.FirstApp= [
      {
        sno:5,
        title: "Monday",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id repellendus hic nostrum, iste cum ipsa error reiciendis consequuntur praesentium. Sit iure, hic iusto nisi at ea earum ducimus perferendis architecto!",
        active: true
      },
      {
        sno:10,
        title: "Saturday",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id repellendus hic nostrum, iste cum ipsa error reiciendis consequuntur praesentium. Sit iure, hic iusto nisi at ea earum ducimus perferendis architecto!",
        active: true
      },
      {
        sno:2,
        title: "Sunday",
        des: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id repellendus hic nostrum, iste cum ipsa error reiciendis consequuntur praesentium. Sit iure, hic iusto nisi at ea earum ducimus perferendis architecto!",
        active: true
      }
    ]
  }
}
