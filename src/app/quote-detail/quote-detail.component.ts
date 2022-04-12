
import { Component, OnInit, Input,Output, EventEmitter}from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote!: Quotes;
  @Output()done=new EventEmitter <boolean>();
  quoteDone(complete:boolean){this.done.emit(complete)}
  constructor() { }

  upvoting(){
    this.quote.upvote=this.quote.upvote+1;
  }

  downvoting(){
    this.quote.downvote=this.quote.downvote+1;
  }

  ngOnInit(): void {
  }

}
