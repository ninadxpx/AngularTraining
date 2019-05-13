import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'demo1nhiii';

  imgsrc ='../assets/galaxy.jpg';
  imgsrc2='../assets/mygalaxy.jpg';

  toggle() {
   if(this.imgsrc=='../assets/galaxy.jpg'){
    this.imgsrc=this.imgsrc2;
   }
   else{
    this.imgsrc='../assets/galaxy.jpg';
   }

  }
}
