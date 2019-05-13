import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mydemo',
  templateUrl: './mydemo.component.html',
  styleUrls: ['./mydemo.component.css']
})
export class MydemoComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  counter:number=0;

  add():void{
    console.log('add invokerd');
    this.counter++;
  }

}
