import { Component, OnInit,Input,Output, EventEmitter  } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-text',
  templateUrl: './quote-text.component.html',
  styleUrls: ['./quote-text.component.css']
})
export class QuoteTextComponent implements OnInit {

  @Input() quote: Quote;
  @Output() isDeleted = new EventEmitter<boolean>();

  quoteDeletion(remove: boolean) {
    this.isDeleted.emit(remove);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
