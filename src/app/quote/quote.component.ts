import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quotes[]=[
    {id:1, quote:"There is always light.If only we're brave enough to see it. If only we're brave enough to be it.",author:"Amanda Gorman",datePassed:new Date,userName:"Daisy",upvote:0,downvote:0},
    {id:2, quote:"I have learned not to allow rejection to move me.",author:"Cicely Tyson",datePassed:new Date,userName:"Daisy",upvote:0,downvote:0},
    {id:3, quote:"Don't sit down and wait for the opportunities to come.Get up and make them.",author:"Madam C.J. Walker",datePassed:new Date,userName:"Daisy",upvote:0,downvote:0},
    {id:4, quote:"All dreams are within reach. All you have to do is keep moving towards them.",author:"Viola Davis",datePassed:new Date,userName:"Daisy",upvote:0,downvote:0},
    {id:1, quote:"quote1",author:"Ivy",datePassed:new Date,userName:"Daisy",upvote:0,downvote:0}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
