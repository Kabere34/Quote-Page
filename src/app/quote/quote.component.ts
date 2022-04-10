import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes: Quote[] = [
    new Quote(1, "There is always light.If only we're brave enough to see it. If only we're brave enough to be it.", 'Amanda Gorman', 2, 1, 'Ivy'),
    new Quote(2, "I have learned not to allow rejection to move me.", 'Cicely Tyson', 2, 1, 'Ivy'),
    new Quote(3, "Don't sit down and wait for the opportunities to come.Get up and make them.", 'Madam C.J. Walker', 2, 1, 'Ivy'),
    new Quote(4, "All dreams are within reach. All you have to do is keep moving towards them.", 'Viola Davis', 2, 1, 'Ivy'),
    new Quote(5, "Act as if what you do makes a difference. It does.", 'William James', 2, 1, 'Ivy'),
    new Quote(6, "Never bend your head. Always hold it high. Look the world straight in the eye.", 'Hellen Keller', 2, 1, 'Ivy'),
    new Quote(7, "When you have a dream, you've got to grab it and never let go.", 'Carol Burnett', 2, 1, 'Ivy'),
    new Quote(8, 'It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.', 'William James', 2, 1, 'Ivy')




  ]
  constructor() { }

  ngOnInit(): void {
  }

}
