import { Component } from '@angular/core';
import {Emp} from './emp';
import { empty } from 'rxjs';
import { EMPTY_ARRAY } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'demo2';
   emp :Emp = new Emp();
    emparr:Array<Emp>=new Array();

   add():void{
    this.emparr.push(this.emp);
    this.emp = new Emp();
   }

   delete(index:number):void{
     delete this.emparr [index];
     this.emparr.splice(index,1);
   }

}
