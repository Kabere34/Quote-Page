import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    new Quotes(1,"There is always light.If only we're brave enough to see it. If only we're brave enough to be it.","Amanda Gorman",new Date(2019,3,19),"Daisy",0,0),
    new Quotes(2,"I have learned not to allow rejection to move me.","Cicely Tyson",new Date (2019,3,19),"Mark",0,0),
    new Quotes(3, "Don't sit down and wait for the opportunities to come.Get up and make them.","Madam C.J. Walker",new Date (2019,3,19),"Daisy",0,0),
    new Quotes(4,"All dreams are within reach. All you have to do is keep moving towards them.","Viola Davis",new Date (2019,3,19),"Daisy",0,0),
    new Quotes(5,"It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.","William James",new Date (2019,3,19),"Daisy",0,0)
  ];

toggleDetails(index){

  this.quotes[index].showDescription=!this.quotes[index].showDescription;
}
completeQuote(done,index){
if(done){this.quotes.splice(index,1);}
}
  constructor() { }

  ngOnInit(): void {
  }

}
