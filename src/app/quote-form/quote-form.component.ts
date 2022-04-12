<<<<<<< HEAD
import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quotes } from '../quotes';

=======
import { Component, OnInit,Output,EventEmitter} from '@angular/core';
import { Quote } from '../quote';
import { NgForm } from '@angular/forms';
>>>>>>> ff82ff582d32e6594beafc5dbb1522aaa9724588
@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

<<<<<<< HEAD
  newQuote= new Quotes(0,"","",new Date(), "",0,0)
  @Output() addQuote = new EventEmitter <Quotes>();
  submitForm(){
    this.addQuote.emit(this.newQuote)
=======
  newQuote = new Quote(0, new Date(),"", "", 0, 0, "")
  @Output() addQuote = new EventEmitter<Quote>();

  onSubmit(form: NgForm) {
    var check = this.newQuote;

    this.addQuote.emit(this.newQuote);
    form.resetForm();
>>>>>>> ff82ff582d32e6594beafc5dbb1522aaa9724588
  }


  constructor() { }

  ngOnInit(): void {
  }

}
<<<<<<< HEAD
=======


>>>>>>> ff82ff582d32e6594beafc5dbb1522aaa9724588
