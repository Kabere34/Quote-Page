import { Component } from '@angular/core';
import { Quotes } from './quotes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app-quote';
quotes:Quotes[]=[
  {id:1, quote:"quote1",author:"Ivy",datePassed:new Date,userName:"Daisy",upvote:0,downvote:0}
];


}
